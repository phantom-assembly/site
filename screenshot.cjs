const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 1024 });
  await page.goto('https://id-preview--6cadf4cf-5919-4604-bf5c-5931f1de9b6b.lovable.app/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'lovable-reference.png', fullPage: true });
  await browser.close();
})();
