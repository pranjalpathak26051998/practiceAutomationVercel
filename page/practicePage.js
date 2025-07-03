const { Browser, Builder, Key, until, By } = require('selenium-webdriver');
const fs = require('fs');
const getbaseUrl = require('../config/baseUrl');
const maximizeWindowBrowser = require('../helper/helper');

const config = getbaseUrl();          // Call the function
console.log(config.baseUrl);         // Correct way to access the property
let driver;
async function setupDriver() {
    driver = await new Builder().forBrowser('chrome').build();
    console.log("Driver has been setup successfully....");
    return driver
};

async function getUrl() {
    await driver.get(config.baseUrl);
    await maximizeWindowBrowser(driver);
    console.log("Url accessed successfully....");
};

// async function -------------continue from here

//Form Element validation
async function formFieldValidations() {

    //First Name
    await driver.wait(until.elementLocated(By.xpath("//input[contains(@placeholder,'First Name')]")), 10000);
    const firstName = await driver.findElement(By.xpath("//input[contains(@placeholder,'First Name')]"));
    if (!firstName) {
        console.log("There is no such element like First Name");
    } else {
        console.log("First Name field exists...")
    };

    //Last Name
    await driver.wait(until.elementLocated(By.xpath("//input[contains(@placeholder,'Last Name')]")), 10000);
    const lastName = await driver.findElement(By.xpath("//input[contains(@placeholder,'Last Name')]"));
    if (!lastName) { console.log("There is no such element like last Name") }
    else { console.log("Last Name field exists ...") };

    //Email
    await driver.wait(until.elementLocated(By.xpath("//input[contains(@placeholder,'name@example.com')]")), 10000);
    const emailField = await driver.findElement(By.xpath("//input[contains(@placeholder,'name@example.com')]"));
    // if(!emailField){console.log("Email field is not present")}else{console.log("Email field exists...")}
    emailField ? console.log("Email field exists...") : console.log("Email field is not present");

    // -----------------------------------------------------------
    //using the label to find out and validate
    const labelGender =  await driver.findElements(By.id('genterWrapper','label'))
    console.log("the length is "+labelGender.length);


    // ------------------------------------------------------------

    //Gender -Male
    await driver.wait(until.elementLocated(By.xpath("//div[@id='genterWrapper']/div[2]//input[@value='Male']")), 10000);
    const maleField = await driver.findElement(By.xpath("//div[@id='genterWrapper']/div[2]//input[@value='Male']"))
    maleField ? console.log("Gender option Male is available") : console.log("Gender option Male Doesn't exist..");

    //Gender - Female
    await driver.wait(until.elementLocated(By.xpath("//div[@id='genterWrapper']/div[2]//input[@value='Female']")), 10000);
    const femaleField = await driver.findElement(By.xpath("//div[@id='genterWrapper']/div[2]//input[@value='Female']"))
    femaleField ? console.log("Gender option Female is available ") : console.log("Gender option Female doesn't exists");

    //Gender -Others
    await driver.wait(until.elementLocated(By.xpath("//div[@id='genterWrapper']/div[2]//input[@value='Other']")), 10000);
    const othersField = await driver.findElement(By.xpath("//div[@id='genterWrapper']/div[2]//input[@value='Other']"));
    othersField ? console.log("Gender option Others is available ") : console.log("Gender option Others doesn't exists..");

}
//enter inputs
async function enterFormDetails() {
    //upload file 
    const ssFilepath = '/home/hcode/Pictures/Screenshots/ssFileUpload.png';

    const inputFile = await driver.findElement(By.id("uploadPicture"));
    await inputFile.sendKeys(ssFilepath);
    console.log("successfully uploaded the file")
};

async function closeDriver() {
    await driver.quit();
    console.log("Driver has been closed successfully....");
};

async function runWtrFm() {
    await setupDriver();
    await getUrl();
    await formFieldValidations();
    await driver.sleep(2000);
    await enterFormDetails()
    await driver.sleep(3000);
    await closeDriver();
}
runWtrFm();