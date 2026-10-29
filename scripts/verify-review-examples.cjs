const assert=require('node:assert/strict');
const {spawn}=require('node:child_process');
const {createRequire}=require('node:module');
const path=require('node:path');
const {chromium}=createRequire(path.join(process.argv[2],'package.json'))('playwright');
let server,browser;
(async()=>{
 server=spawn(process.execPath,['scripts/preview-comparison.mjs'],{windowsHide:true});
 await new Promise((resolve,reject)=>{server.stdout.on('data',data=>{if(String(data).includes('4175'))resolve();});server.stderr.on('data',data=>reject(new Error(String(data))));});
 browser=await chromium.launch({headless:true,channel:'chrome',args:['--no-proxy-server']});
 for(const width of [320,390,768,1440]){
  const page=await browser.newPage({viewport:{width,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:4175/index.html',{waitUntil:'networkidle'});
  const section=page.locator('.review-examples'),slider=section.locator('.swiper');await section.scrollIntoViewIfNeeded();
  assert.equal(await section.locator('.review-example-card').count(),6);assert.equal(await section.locator('.review-example-badge').count(),6);
  assert((await section.textContent()).includes('ils ne sont pas des avis clients vérifiés'));
  await section.locator('.review-example-photo img').evaluateAll(images=>Promise.all(images.map(img=>img.decode())));
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  assert.equal(await slider.evaluate(el=>el.swiper.autoplay.running),true);
  if(width===390){const initial=await slider.evaluate(el=>el.swiper.realIndex);await page.waitForFunction(initial=>document.querySelector('.review-examples-slider').swiper.realIndex!==initial,initial,{timeout:9000});}
  await section.getByRole('button',{name:'Afficher l’exemple 1',exact:true}).click();await page.waitForTimeout(750);
  assert.equal(await slider.evaluate(el=>el.swiper.realIndex),0);
  await section.getByRole('button',{name:'Commentaire suivant',exact:true}).click();await page.waitForTimeout(750);assert.equal(await slider.evaluate(el=>el.swiper.realIndex),1);
  await section.getByRole('button',{name:'Commentaire précédent',exact:true}).focus();await page.keyboard.press('Enter');await page.waitForTimeout(750);assert.equal(await slider.evaluate(el=>el.swiper.realIndex),0);
  assert.equal(await slider.evaluate(el=>el.swiper.autoplay.running),false);
  await page.addStyleTag({content:'header,a[aria-label="Discuter sur WhatsApp"]{opacity:0!important;transition:none!important;}'});await page.evaluate(()=>document.activeElement?.blur());
  await section.screenshot({path:`artifacts/review-examples-${width}.png`});
  assert.equal(errors.length,0);console.log(JSON.stringify({width,illustrativeLabels:true,photosLoaded:true,arrows:true,keyboard:true,overflow:false,errors}));await page.close();
 }
 const reduced=await browser.newPage({reducedMotion:'reduce'});await reduced.goto('http://127.0.0.1:4175/index.html',{waitUntil:'networkidle'});
 assert.equal(await reduced.locator('.review-examples .swiper').evaluate(el=>el.swiper.autoplay.running),false);console.log('Reduced motion: no autoplay.');
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{await browser?.close();server?.kill();});
