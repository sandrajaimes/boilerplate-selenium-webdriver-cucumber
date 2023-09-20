import { WebDriver } from 'selenium-webdriver';
require('dotenv').config();

import { start } from '../../drivers/index';
import {
  TCloseWebFunction,
  TOpenWebFunction,
  TStartDriverFunction,
} from './types';

/*Website manager*/
export const StartDriver: TStartDriverFunction = async function StartDriver(
  defineBrowser: string
) {
  try {
    if (!defineBrowser) {
      new Error('The driver must be defined');
    }

    return await start(defineBrowser);
  } catch (e) {
    console.log('It was not possible to create the driver instance: ', e);
    throw new Error('It was not possible to create the driver instance');
  }
};

export const OpenWeb: TOpenWebFunction = async function (
  driver: WebDriver,
  website: string
) {
  await driver.get(website);

  const getTitleWindow: string = await driver.getTitle();

  await driver.manage().setTimeouts({
    implicit: parseInt(process.env.MAXIMUM_WAITING_TIME_PER_ITEM || '3000'),
  });

  return {
    titlePage: getTitleWindow,
  };
};

export const CloseWeb: TCloseWebFunction = async function (driver: WebDriver) {
  await driver.close();
  await driver.quit();
};

module.exports = {
  StartDriver,
  OpenWeb,
  CloseWeb,
};
