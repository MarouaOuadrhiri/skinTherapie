const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');
const { spawn } = require('node:child_process');
const runtime = createRequire(path.join(process.argv[2], 'package.json'));
const { chromium } = runtime('playwright');
let server, browser;

(async () => {
  fs.mkdirSync('artifacts', { recursive: true });
  server = spawn(process.execPath, ['scripts/preview-comparison.mjs'], {
    windowsHide: true,
  });
  await new Promise((resolve, reject) => {
    server.stdout.on('data', (data) => {
      if (String(data).includes('4175')) resolve();
    });
    server.stderr.on('data', (data) => reject(new Error(String(data))));
  });
  browser = await chromium.launch({
    headless: true,
    channel: 'chrome',
    args: ['--no-proxy-server'],
  });
  const { services } = await import('../src/data/services.js');
  for (const width of [1440, 768, 390]) {
    for (const route of ['index', 'service']) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      await page.goto(`http://127.0.0.1:4175/${route}.html`, {
        waitUntil: 'networkidle',
      });
      const cards = page.locator('.service-card');
      const triggers = page.locator('.service-card-trigger');
      assert.equal(await cards.count(), 8);
      assert.equal(await page.locator('.service-card.is-open').count(), 0);
      assert.equal(
        await page
          .locator('.service-card-panel:has(.service-card-details:visible)')
          .count(),
        0,
      );
      assert.deepEqual(
        await page.locator('.service-card-title h3').allTextContents(),
        services.map((service) => service.title),
      );
      const rdv = cards.first().locator('.service-card-rdv');
      assert.equal(await rdv.getAttribute('href'), 'appointment.html');
      assert.equal(
        await rdv.textContent(),
        route === 'index' ? 'Prendre RDV' : 'Prendre rendez-vous',
      );
      for (let index = 0; index < 8; index++) {
        await triggers.nth(index).click();
        assert.equal(await page.locator('.service-card.is-open').count(), 1);
        assert.equal(
          await triggers.nth(index).getAttribute('aria-expanded'),
          'true',
        );
        await page.waitForTimeout(500);
        assert.equal(
          await cards.nth(index).locator('.service-mini-card').count(),
          services[index].subServices.length,
        );
        const photos = cards.nth(index).locator('.service-mini-photo > img');
        assert.equal(await photos.count(), services[index].subServices.length);
        for (const photo of await photos.all()) {
          await photo.scrollIntoViewIfNeeded();
          await photo.evaluate((image) =>
            image.complete && image.naturalWidth > 0
              ? Promise.resolve()
              : new Promise((resolve, reject) => {
                  image.addEventListener('load', resolve, { once: true });
                  image.addEventListener(
                    'error',
                    () =>
                      reject(new Error(`Missing service photo: ${image.src}`)),
                    { once: true },
                  );
                }),
          );
          assert.equal(
            await photo.evaluate((image) => image.naturalWidth > 0),
            true,
          );
        }
        const gridColumns = await cards
          .nth(index)
          .locator('.service-card-grid')
          .evaluate(
            (grid) =>
              getComputedStyle(grid).gridTemplateColumns.split(' ').length,
          );
        assert.equal(gridColumns, width >= 768 ? 2 : 1);
        assert.equal(
          await page.evaluate(
            () => document.documentElement.scrollWidth > innerWidth,
          ),
          false,
        );
      }
      await triggers.last().click();
      await page.waitForTimeout(500);
      assert.equal(await page.locator('.service-card.is-open').count(), 0);
      await triggers.first().focus();
      await page.keyboard.press('Enter');
      assert.equal(
        await triggers.first().getAttribute('aria-expanded'),
        'true',
      );
      await page.waitForTimeout(500);
      await page.keyboard.press('Space');
      assert.equal(
        await triggers.first().getAttribute('aria-expanded'),
        'false',
      );
      await page.waitForTimeout(500);
      // Exercise interrupted transitions without scrolling/click delays.
      await triggers.first().evaluate((button) => {
        button.click();
        button.click();
        button.click();
      });
      await triggers.nth(1).evaluate((button) => button.click());
      await page.waitForTimeout(500);
      assert.equal(await page.locator('.service-card.is-open').count(), 1);
      assert.equal(await triggers.nth(1).getAttribute('aria-expanded'), 'true');
      await triggers.first().evaluate((button) => button.click());
      await page.waitForTimeout(500);
      // Verify that height is interpolated during closure, not switched instantly.
      const heights = await cards.first().evaluate(async (card) => {
        const panel = card.querySelector('.service-card-panel');
        const heights = [panel.getBoundingClientRect().height];
        card.querySelector('button').click();
        await new Promise((resolve) => setTimeout(resolve, 150));
        heights.push(panel.getBoundingClientRect().height);
        await new Promise((resolve) => setTimeout(resolve, 400));
        heights.push(panel.getBoundingClientRect().height);
        return heights;
      });
      assert(
        heights[1] > 0 && heights[1] < heights[0],
        `Height did not interpolate: ${heights}`,
      );
      assert.equal(heights[2], 0);
      await triggers.first().evaluate((button) => button.click());
      await page.waitForTimeout(500);
      // Hide fixed elements only in screenshots so they do not cover the card.
      const screenshotStyle = await page.addStyleTag({
        content:
          'header, a[aria-label="Discuter sur WhatsApp"] { opacity: 0 !important; }',
      });
      await cards
        .first()
        .screenshot({ path: `artifacts/services-${route}-${width}.png` });
      await screenshotStyle.evaluate((element) => element.remove());
      // RDV navigation remains independent from the accordion trigger.
      await rdv.click();
      await page.waitForURL('**/appointment.html');
      assert.equal(errors.length, 0, errors.join('\n'));
      console.log(
        JSON.stringify({
          route,
          width,
          services: 8,
          singleOpen: true,
          keyboard: true,
          animatedHeight: heights,
          bookingLink: true,
          overflow: false,
          errors,
        }),
      );
      await page.close();
    }
  }
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  await page.goto('http://127.0.0.1:4175/service.html', {
    waitUntil: 'networkidle',
  });
  assert.equal(
    await page
      .locator('.service-card-panel')
      .first()
      .evaluate((panel) => getComputedStyle(panel).transitionDuration),
    '0s',
  );
  console.log('Reduced motion: passed.');
})()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await browser?.close();
    server?.kill();
  });
