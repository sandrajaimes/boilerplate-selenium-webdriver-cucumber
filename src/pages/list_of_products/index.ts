import {By, WebElement} from "selenium-webdriver";

import libsAll from "./libs/index";
import {CategoryList, ClickElementCategoryByPosition, DetailsOfProductByPosition, ProductList} from './interfaces/index';

/*Selectors*/
const productListingSelector: string = '//div[@id="tbodyid"]//div';
const categoriesListingSelector: string = '//*[@id="contcont"]/div/div/div//a';
const titleProduct: string = `//div[@id="tbodyid"]/div::/div/div/h4/a`;
const priceProduct: string = `//div[@id="tbodyid"]/div::/div/div/h5`;
const descriptionProduct: string = `//div[@id="tbodyid"]/div::/div/div/p`;

/*Product*/
export async function getListOfProducts(driver: any): Promise<ProductList> {
  const checkIfExistLeastOneProduct: WebElement[]= await driver.findElements(
    By.xpath(productListingSelector)
  );

  return {
    listOfProducts: checkIfExistLeastOneProduct,
  };
}

export async function getDetailsOfProductByPosition(driver: any,position: number): Promise<DetailsOfProductByPosition> {
  libsAll.validationsToPosition(position)

  const findTitleProductByPosition: WebElement[] = await driver.findElements(
    By.xpath(libsAll.includePosition(titleProduct, position))
  );

  const findPriceProductByPosition: WebElement[] = await driver.findElements(
      By.xpath(libsAll.includePosition(priceProduct, position))
  );

  const findDescriptionProductByPosition: WebElement[] = await driver.findElements(
      By.xpath(libsAll.includePosition(descriptionProduct, position))
  );

  return {
    titleOfProduct: await findTitleProductByPosition[0].getText(),
    priceOfProduct: await findPriceProductByPosition[0].getText(),
    descriptionOfProduct: await findDescriptionProductByPosition[0].getText()
  }
}

/*Categories*/
async function getListOfCategories(driver: any): Promise<CategoryList> {
  const checkIfExistLeastOneCategory: WebElement[] = await driver.findElements(
    By.xpath(categoriesListingSelector)
  );

  return {
    listOfCategories: checkIfExistLeastOneCategory,
  };
}

export async function clickElementOfCategoriesByPosition(driver: any,position: number): Promise<ClickElementCategoryByPosition> {
  const { listOfCategories } = await getListOfCategories(driver);

  libsAll.validationsToArrayFromPosition(position, listOfCategories);

  const onlyElement: any[] = listOfCategories.filter((value: any, index: any) => index === position)

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
}
