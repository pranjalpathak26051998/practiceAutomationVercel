// const { Builder, By,Key, until, Browser} = require('selenium-webdriver');

function getbaseUrl() {
    return {
        // baseUrl: "https://dev.wtr.fm",
        baseUrl:"https://demoqa.com/automation-practice-form",
        setTimeout: 5000,
        browser: 'chrome'
    };
}

module.exports = getbaseUrl;
