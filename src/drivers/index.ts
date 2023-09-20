import { createChromeDriver } from './chrome';
import { ThenableWebDriver, WebDriver } from 'selenium-webdriver';

export async function start(defineBrowser: string): Promise<WebDriver> {
  const allDriver: Record<string, ThenableWebDriver> = {
    chrome: createChromeDriver(),
    default: createChromeDriver(),
  };

  return allDriver[`${defineBrowser}`] || allDriver['default'];
}
