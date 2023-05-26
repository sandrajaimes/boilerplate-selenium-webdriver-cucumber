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
} = require("../../../../pages/list_of_products");

let driverOn;
const urlPage = "https://demoblaze.com/"
const titlePageCompare = "STORE";

Given("If I open the page in the product list - US_01", async function () {
  try{
    driverOn = await startDriver("chrome");
    const { titlePage } = await openWeb(driverOn, urlPage);

    assert.strictEqual(true, titlePage === titlePageCompare);
  }catch (e) {
    await closeWeb(driverOn)
  }
});

When("I can see a list of products", async function () {
  try {
    const { listOfProducts } = await getListOfProducts(driverOn);

    assert.strictEqual(true, listOfProducts.length > 0);
  }catch (e) {
    await closeWeb(driverOn)
  }
});

Then("I can get: Title, price and description", async function () {
  try {
    const { titleOfProduct, priceOfProduct, descriptionOfProduct } =
        await getDetailsOfProductByPosition(driverOn, 1);

    assert.strictEqual(
        true,
        !!titleOfProduct && !!priceOfProduct && !!descriptionOfProduct
    );

    await closeWeb(driverOn)
  }catch (e) {
    await closeWeb(driverOn)
  }
});