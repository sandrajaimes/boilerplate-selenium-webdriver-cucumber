import { CreateChromeDriver } from './chrome';
import { WebDriver } from 'selenium-webdriver';

export const DefineBrowserByString = async function (defineBrowser: string): Promise<any> {
  const defaultChrome = await CreateChromeDriver();

  const allDriver: Record<string, WebDriver> = {
    chrome: defaultChrome,
    default: defaultChrome,
  };

  return allDriver[`${defineBrowser}`] || allDriver['default'];
}

module.exports = {
  DefineBrowserByString
}
