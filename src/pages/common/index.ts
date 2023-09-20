import {WebDriver} from "selenium-webdriver";
require("dotenv").config();

import {start} from "../../drivers/index";

/*Website manager*/
export async function startDriver(driver: string): Promise<WebDriver>{
  try {
    if (!driver) {
      new Error("The driver must be defined");
    }

    return await start(driver);
  }catch (e){
    console.log('It was not possible to create the driver instance: ', e)
    throw new Error('It was not possible to create the driver instance')
  }
}

export async function openWeb(driver: WebDriver, website: string) {
  await driver.get(website);

  const getTitleWindow: string = await driver.getTitle();

  await driver
      .manage()
      .setTimeouts({
        implicit: parseInt(process.env.MAXIMUM_WAITING_TIME_PER_ITEM || '3000'),
      });

  return {
    titlePage: getTitleWindow,
  };
}

export async function closeWeb(driver: WebDriver) {
  await driver.close();
  await driver.quit();
}

module.exports = {
  startDriver,
  openWeb,
  closeWeb
}