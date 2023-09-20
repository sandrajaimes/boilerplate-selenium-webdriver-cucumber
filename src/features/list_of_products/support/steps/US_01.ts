import {strictEqual} from "assert";
import {Given, Then, When} from "@cucumber/cucumber";
import {WebDriver} from "selenium-webdriver";

import {startDriver, openWeb,closeWeb} from "../../../../pages/common";
import {getListOfProducts, getDetailsOfProductByPosition} from '../../../../pages/list_of_products';

let driverOn: WebDriver;
const urlPage: string = "https://demoblaze.com/"
const titlePageCompare: string = "STORE";

Given("If I open the page in the product list - US_01", async function () {
  try{
    driverOn = await startDriver("chrome");
    const { titlePage } = await openWeb(driverOn, urlPage);

    strictEqual(true, titlePage === titlePageCompare);
  }catch (e) {
    console.log('Failed: If I open the page in the product list - US_01: ', e)
    await closeWeb(driverOn)
  }
});

When("I can see a list of products", async function () {
  try {
    const { listOfProducts } = await getListOfProducts(driverOn);

    strictEqual(true, listOfProducts.length > 0);
  }catch (e) {
    console.log('Failed: I can see a list of products: ', e)
    await closeWeb(driverOn)
  }
});

Then("I can get: Title, price and description", async function () {
  try {
    const { titleOfProduct, priceOfProduct, descriptionOfProduct } =
        await getDetailsOfProductByPosition(driverOn, 1);

    strictEqual(
        true,
        !!titleOfProduct && !!priceOfProduct && !!descriptionOfProduct
    );

    await closeWeb(driverOn)
  }catch (e) {
    console.log('Failed: I can get: Title, price and description ', e)
    await closeWeb(driverOn)
  }
});
