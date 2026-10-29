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
 for(const width of [1440,390])for(const route of ['index','contact','appointment','service-static']){
  const page=await browser.newPage({viewport:{width,height:1000}});let destination;
  await page.route('https://wa.me/**',async request=>{destination=request.request().url();await request.fulfill({status:200,contentType:'text/html',body:'<p>Local link test</p>'});});
  await page.goto(`http://127.0.0.1:4175/${route}.html`,{waitUntil:'networkidle'});
  assert.equal(await page.locator('form').count(),0);
  const link=page.locator('.whatsapp-submit');assert.equal(await link.count(),1);
  assert.equal(await link.getAttribute('href'),'https://wa.me/212713615758');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  const navigation=page.waitForURL('https://wa.me/**');
  if(width===390){await link.focus();await page.keyboard.press('Enter');}else await link.click();
  await navigation;assert.equal(destination,'https://wa.me/212713615758');
  console.log(JSON.stringify({route,width,directWhatsApp:true,forms:0,queryParameters:0}));await page.close();
 }
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{await browser?.close();server?.kill();});
