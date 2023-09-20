"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChromeDriver = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = require("selenium-webdriver/chrome");
function createChromeDriver() {
    try {
        const options = new chrome_1.Options();
        options.addArguments(`${process.env.DEFINE_BROWSER}`);
        return new selenium_webdriver_1.Builder()
            .setChromeOptions(options)
            .forBrowser("chrome")
            .build();
    }
    catch (e) {
        console.log('Driver creation failed', e);
        throw new Error('It was not possible to create the driver instance');
    }
}
exports.createChromeDriver = createChromeDriver;
