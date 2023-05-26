const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

const {
  startDriver,
  openWeb,
  closeWeb,
} = require("../../../../pages/common/index");
const {
  getListOfProducts,
  getDetailsOfProductByPosition,
  clickElementOfCategoriesByPosition,
} = require("../../../../pages/list_of_products");

let driverOn;
const urlPage = "https://demoblaze.com/";
const titlePageCompare = "STORE";
const titleFirstProductCompare = "Samsung galaxy s6";
const priceOfFirstProductCompare = "$360";
const descriptionOfFistProductCompare = `The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.`;

Given("If I open the page in the product list - US_02", async function () {
  try {
    driverOn = await startDriver("chrome");
    const { titlePage } = await openWeb(driverOn, urlPage);

    const { listOfProducts } = await getListOfProducts(driverOn);

    assert.strictEqual(true, titlePage === titlePageCompare);
    assert.strictEqual(true, listOfProducts.length > 0);
  } catch (e) {
    await closeWeb(driverOn);
  }
});

When("When you selected the Phones option", async function () {
  try {
    const { successful } = await clickElementOfCategoriesByPosition(
      driverOn,
      1
    );

    assert.strictEqual(true, successful);
  } catch (e) {}
});

Then("Only products corresponding to: Phones are visible", async function () {
  try {
    const { titleOfProduct, priceOfProduct, descriptionOfProduct } =
      await getDetailsOfProductByPosition(driverOn, 1);

    assert.strictEqual(true, titleOfProduct === titleFirstProductCompare);
    assert.strictEqual(true, priceOfProduct === priceOfFirstProductCompare);
    assert.strictEqual(
      true,
      descriptionOfProduct === descriptionOfFistProductCompare
    );
    await closeWeb(driverOn);
  } catch (e) {
    await closeWeb(driverOn);
  }
});
