import { strictEqual } from 'assert';
import { Given, Then, When } from '@cucumber/cucumber';
import { WebDriver } from 'selenium-webdriver';

import { StartDriver, OpenWeb, CloseWeb } from '../../../../pages/common';
import {
  GetListOfProducts,
  GetDetailsOfProductByPosition,
} from '../../../../pages/list_of_products';

let driverOn: WebDriver;
const urlPage: string = 'https://demoblaze.com/';
const titlePageCompare: string = 'STORE';

Given('If I open the page in the product list - US_01', async function () {
  try {
    driverOn = await StartDriver('chrome');
    const { titlePage } = await OpenWeb(driverOn, urlPage);

    strictEqual(true, titlePage === titlePageCompare);
  } catch (e) {
    console.log('Failed: If I open the page in the product list - US_01: ', e);
    await CloseWeb(driverOn);
  }
});

When('I can see a list of products', async function () {
  try {
    const { listOfProducts } = await GetListOfProducts(driverOn);

    strictEqual(true, listOfProducts.length > 0);
  } catch (e) {
    console.log('Failed: I can see a list of products: ', e);
    await CloseWeb(driverOn);
  }
});

Then('I can get: Title, price and description', async function () {
  try {
    const { titleOfProduct, priceOfProduct, descriptionOfProduct } =
      await GetDetailsOfProductByPosition(driverOn, 1);

    strictEqual(
      true,
      !!titleOfProduct && !!priceOfProduct && !!descriptionOfProduct
    );

    await CloseWeb(driverOn);
  } catch (e) {
    console.log('Failed: I can get: Title, price and description ', e);
    await CloseWeb(driverOn);
  }
});
