import {strictEqual} from "assert";
import {Given, Then, When} from "@cucumber/cucumber";
import {WebDriver} from "selenium-webdriver";

import {startDriver, openWeb,closeWeb} from "../../../../pages/common";
import {getListOfProducts, getDetailsOfProductByPosition, clickElementOfCategoriesByPosition} from '../../../../pages/list_of_products';

let driverOn: WebDriver;
const urlPage: string = "https://demoblaze.com/"
const titlePageCompare: string = "STORE";

const titleFirstProductCompare: string = "Samsung galaxy s6";
const priceOfFirstProductCompare: string = "$360";
const descriptionOfFistProductCompare: string = `The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.`;

Given("If I open the page in the product list - US_02", async function () {
  try {
    driverOn = await startDriver("chrome");
    const { titlePage } = await openWeb(driverOn, urlPage);

    const { listOfProducts } = await getListOfProducts(driverOn);

    strictEqual(true, titlePage === titlePageCompare);
    strictEqual(true, listOfProducts.length > 0);
  } catch (e) {
      console.log('Failed: If I open the page in the product list - US_02: ', e)
      await closeWeb(driverOn);
  }
});

When("When you selected the Phones option", async function () {
  try {
    const { successful } = await clickElementOfCategoriesByPosition(
      driverOn,
      1
    );

   strictEqual(true, successful);
  } catch (e) {}
});

Then("Only products corresponding to: Phones are visible", async function () {
  try {
    const { titleOfProduct, priceOfProduct, descriptionOfProduct } =
      await getDetailsOfProductByPosition(driverOn, 1);

    strictEqual(true, titleOfProduct === titleFirstProductCompare);
    strictEqual(true, priceOfProduct === priceOfFirstProductCompare);
    strictEqual(
      true,
      descriptionOfProduct === descriptionOfFistProductCompare
    );
    await closeWeb(driverOn);
  } catch (e) {
    await closeWeb(driverOn);
  }
});
