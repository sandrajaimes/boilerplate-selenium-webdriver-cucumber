const { By } = require("selenium-webdriver");

/*Selectors*/
const productListingSelector = '//div[@id="tbodyid"]//div';
const categoriesListingSelector = '//*[@id="contcont"]/div/div/div//a';
const titleProduct = `//div[@id="tbodyid"]/div::/div/div/h4/a`;
const priceProduct = `//div[@id="tbodyid"]/div::/div/div/h5`;
const descriptionProduct = `//div[@id="tbodyid"]/div::/div/div/p`

/*libs*/
function includePosition(element, position){
  const separateTheString = element.split('::');
  return `${separateTheString[0]}[${position}]${separateTheString[1]}`
}

function validationsToPosition(position) {
  if (!position) {
    throw new Error("The position of element must be a indicated");
  }

  if (Number.isNaN(position)) {
    throw new Error("The position of element must be a number");
  }
}

function validationsToArrayFromPosition(position, elements) {
  validationsToPosition(position);

  if (position > elements.length) {
    throw new Error("The position is not correct");
  }
}

/*Product*/
async function getListOfProducts(driver) {
  const checkIfExistLeastOneProduct = await driver.findElements(
    By.xpath(productListingSelector)
  );

  return {
    listOfProducts: checkIfExistLeastOneProduct,
  };
}

async function getDetailsOfProductByPosition(driver,position) {
  validationsToPosition(position)

  const findTitleProductByPosition = await driver.findElements(
    By.xpath(includePosition(titleProduct, position))
  );

  const findPriceProductByPosition = await driver.findElements(
      By.xpath(includePosition(priceProduct, position))
  );

  const findDescriptionProductByPosition = await driver.findElements(
      By.xpath(includePosition(descriptionProduct, position))
  );

  return {
    titleOfProduct: await findTitleProductByPosition[0].getText(),
    priceOfProduct: await findPriceProductByPosition[0].getText(),
    descriptionOfProduct: await findDescriptionProductByPosition[0].getText()
  }
}

/*Categories*/
async function getListOfCategories(driver) {
  const checkIfExistLeastOneCategory = await driver.findElements(
    By.xpath(categoriesListingSelector)
  );

  return {
    listOfCategories: checkIfExistLeastOneCategory,
  };
}

async function clickElementOfCategoriesByPosition(driver,position) {
  const { listOfCategories } = await getListOfCategories(driver);

  validationsToArrayFromPosition(position, listOfCategories);

  const onlyElement = listOfCategories.filter((value, index) => index === position)

  onlyElement[0].click()

  return {
    successful: true
  }
}

module.exports = {
  getListOfProducts,
  getDetailsOfProductByPosition,
  getListOfCategories,
  clickElementOfCategoriesByPosition
};
