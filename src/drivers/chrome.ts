import { Builder } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

export const CreateChromeDriver = function () {
  try {
    const options = new Options();
    options.addArguments(`${process.env.DEFINE_BROWSER}`);

    return new Builder().setChromeOptions(options).forBrowser('chrome').build();
  } catch (e) {
    console.log('Driver creation failed', e);
    throw new Error('It was not possible to create the driver instance');
  }
}

module.exports ={
  CreateChromeDriver
}
