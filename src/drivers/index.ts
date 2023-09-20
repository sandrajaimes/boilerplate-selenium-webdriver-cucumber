import {createChromeDriver} from "./chrome"
import {ThenableWebDriver, WebDriver} from "selenium-webdriver";

export async function start(defineDrive: string): Promise<WebDriver> {
  const allDriver: Record<string, ThenableWebDriver> = {
  chrome: createChromeDriver()
};

return allDriver[`${defineDrive}`] || allDriver['chrome'];
}

