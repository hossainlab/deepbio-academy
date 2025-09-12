const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateFlyerImage() {
  let browser;
  
  try {
    // Launch browser
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set viewport to match flyer dimensions
    await page.setViewport({
      width: 800,
      height: 1200,
      deviceScaleFactor: 2 // For high-quality image
    });
    
    // Load the HTML file
    const htmlPath = path.join(__dirname, '../public/flyer.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    await page.setContent(htmlContent, {
      waitUntil: 'networkidle0'
    });
    
    // Wait a bit for animations to settle
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Take screenshot
    const outputPath = path.join(__dirname, '../public/bcb-program-flyer.png');
    
    await page.screenshot({
      path: outputPath,
      type: 'png',
      fullPage: false,
      clip: {
        x: 0,
        y: 0,
        width: 800,
        height: 1200
      }
    });
    
    console.log(`✅ Flyer image generated successfully: ${outputPath}`);
    
    // Also generate a JPEG version for smaller file size
    const jpegPath = path.join(__dirname, '../public/bcb-program-flyer.jpg');
    await page.screenshot({
      path: jpegPath,
      type: 'jpeg',
      quality: 90,
      fullPage: false,
      clip: {
        x: 0,
        y: 0,
        width: 800,
        height: 1200
      }
    });
    
    console.log(`✅ JPEG version generated: ${jpegPath}`);
    
  } catch (error) {
    console.error('❌ Error generating flyer image:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the function
generateFlyerImage();