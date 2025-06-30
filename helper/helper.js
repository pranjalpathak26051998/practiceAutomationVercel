// manage window maximize

const {Builder, Browser, By, Key, until }=require('selenium-webdriver');

async function maximizeWindowBrowser(driver){
    await driver.manage().window().maximize();
    console.log("Window size maximized successfully");

};
module.exports = maximizeWindowBrowser;