const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const options = new chrome.Options();
options.addArguments(`${process.env.DEFINE_BROWSER}`);

function createChromeDriver(){
    return new Builder()
        .setChromeOptions(options)
        .forBrowser("chrome")
        .build();
}

module.exports = {
    createChromeDriver
}