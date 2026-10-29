const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');
const { spawn } = require('node:child_process');
const runtime = createRequire(path.join(process.argv[2], 'package.json'));
const { chromium } = runtime('playwright');
const { PNG } = runtime('pngjs');
const pixelmatchModule = runtime('pixelmatch');
const pixelmatch = pixelmatchModule.default || pixelmatchModule;

let server, browser;
(async () => {
  server = spawn(process.execPath, ['scripts/preview-comparison.mjs'], {
    windowsHide: true,
  });
  await new Promise((resolve, reject) => {
    let output = '';
    server.stdout.on('data', (data) => {
      output += data;
      if (output.includes('4175')) resolve();
    });
    server.stderr.on('data', (data) => reject(new Error(String(data))));
  });
  fs.mkdirSync('artifacts', { recursive: true });
  browser = await chromium.launch({
    headless: true,
    channel: 'chrome',
    args: ['--no-proxy-server'],
  });
  const report = [];
  for (const width of [1440, 390]) {
    for (const route of [
      'index',
      'about',
      'service',
      'service-static',
      'appointment',
      'contact',
      'blog',
      'blog-details',
      'privacy-policy',
      '404-error',
    ]) {
      const snapshots = [];
      for (const port of [4174, 4175]) {
        const page = await browser.newPage({
          viewport: { width, height: 900 },
          reducedMotion: 'reduce',
        });
        const errors = [];
        page.on('pageerror', (error) => errors.push(error.message));
        await page.goto(`http://127.0.0.1:${port}/${route}.html`, {
          waitUntil: 'networkidle',
        });
        await page.evaluate(async () => {
          await document.fonts.ready;
          document
            .querySelectorAll('.swiper')
            .forEach((element) => element.swiper?.autoplay?.stop());
        });
        const metrics = await page.evaluate(() => {
          const content = document.body.cloneNode(true);
          content.querySelectorAll('.swiper-wrapper').forEach((wrapper) => {
            [...wrapper.children]
              .sort((a, b) => a.textContent.localeCompare(b.textContent))
              .forEach((slide) => wrapper.appendChild(slide));
          });
          return {
            title: document.title,
            text: content.textContent.replace(/\s+/g, ' ').trim(),
            height: document.body.scrollHeight,
            elements: [
              ...document.querySelectorAll('h1, h2, header, footer, form'),
            ].map((element) => {
              const rect = element.getBoundingClientRect();
              const style = getComputedStyle(element);
              return {
                tag: element.tagName,
                text: element.textContent.replace(/\s+/g, ' ').trim(),
                x: rect.x,
                y: rect.y,
                width: rect.width,
                height: rect.height,
                color: style.color,
                font: style.fontFamily,
                size: style.fontSize,
              };
            }),
            sliders: [...document.querySelectorAll('.swiper')].map(
              (el) => !!el.swiper,
            ),
          };
        });
        const image = await page.screenshot({ animations: 'disabled' });
        if (route === 'index')
          fs.writeFileSync(`artifacts/${width}-${port}.png`, image);
        snapshots.push({ metrics, image, errors });
        await page.close();
      }
      const [before, after] = snapshots;
      if (before.metrics.text !== after.metrics.text) {
        const index = [...before.metrics.text].findIndex(
          (character, i) => character !== after.metrics.text[i],
        );
        console.log(
          JSON.stringify({
            textDifference: route,
            index,
            before: before.metrics.text.slice(
              Math.max(0, index - 60),
              index + 150,
            ),
            after: after.metrics.text.slice(
              Math.max(0, index - 60),
              index + 150,
            ),
          }),
        );
      }
      const a = PNG.sync.read(before.image),
        b = PNG.sync.read(after.image);
      const pixels = pixelmatch(a.data, b.data, null, a.width, a.height, {
        threshold: 0.1,
      });
      const geometry = before.metrics.elements
        .map((element, index) => {
          const other = after.metrics.elements[index];
          if (!other) return `missing ${element.tag}`;
          const changes = [
            'x',
            'y',
            'width',
            'height',
            'color',
            'font',
            'size',
          ].filter((key) =>
            typeof element[key] === 'number'
              ? Math.abs(element[key] - other[key]) > 1
              : element[key] !== other[key],
          );
          return changes.length
            ? `${element.tag}[${index}]: ${changes.join(', ')}`
            : null;
        })
        .filter(Boolean);
      report.push({
        width,
        route,
        textEqual: before.metrics.text === after.metrics.text,
        titleEqual: before.metrics.title === after.metrics.title,
        heightDelta: after.metrics.height - before.metrics.height,
        geometry,
        pixelDifferencePercent: +(
          (100 * pixels) /
          (a.width * a.height)
        ).toFixed(3),
        errors: after.errors,
        sliders: after.metrics.sliders,
      });
      console.log(JSON.stringify(report.at(-1)));
    }
  }
  const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
  await page.goto('http://127.0.0.1:4175/index.html', {
    waitUntil: 'networkidle',
  });
  await page.locator('[data-hs-overlay="#mobile-menu"]').click();
  await page.waitForFunction(
    () => !document.querySelector('#mobile-menu').classList.contains('hidden'),
  );
  const mobileMenu = await page.locator('#mobile-menu').isVisible();
  await page.locator('[data-hs-overlay="#mobile-menu"]').click();
  const faq = page.locator('#faq-2 .hs-accordion-toggle');
  await faq.click();
  await page.waitForFunction(() =>
    document.querySelector('#faq-2').classList.contains('active'),
  );
  const input = page.locator('input[type=range]');
  await input.evaluate((element) => {
    element.value = '75';
    element.dispatchEvent(new Event('input', { bubbles: true }));
  });
  const range = await input.evaluate((element) =>
    element.parentNode.style.getPropertyValue('--pos'),
  );
  const navigation = await browser.newPage();
  await navigation.goto('http://127.0.0.1:4175/index.html');
  await navigation.locator('#navbar a[href="about.html"]').click();
  await navigation.waitForURL('**/about.html');
  console.log(
    JSON.stringify({
      mobileMenu,
      faq: true,
      range,
      navigation: await navigation.title(),
    }),
  );
  fs.writeFileSync(
    'artifacts/verification.json',
    JSON.stringify(report, null, 2),
  );
  await browser.close();
  if (
    report.some(
      (item) =>
        item.errors.length ||
        item.geometry.length ||
        !item.textEqual ||
        !item.titleEqual,
    ) ||
    !mobileMenu ||
    range !== '75%'
  )
    process.exitCode = 1;
})()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await browser?.close();
    server?.kill();
  });
