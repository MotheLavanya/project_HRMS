import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set viewport for a desktop view
    await page.setViewport({ width: 1920, height: 1080 });

    try {
        // Navigate to your local dev server
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

        // Take a screenshot of the Hero section area
        await page.screenshot({ path: 'screencap.png', fullPage: true });

        console.log('Screenshot saved to screencap.png');
    } catch (err) {
        console.error('Error taking screenshot:', err);
    } finally {
        await browser.close();
    }
})();
