import { By, WebDriver, WebElement } from 'selenium-webdriver';

import libsAll from './libs/index';
import {
  TClickElementOfCategoriesByPositionFunction,
  TGetDetailsOfProductByPositionFunction,
  TGetListOfCategoriesFunction,
  TGetListOfProductsFunction,
} from './types';

/*Selectors*/
const productListingSelector: string = '//div[@id="tbodyid"]//div';
const categoriesListingSelector: string = '//*[@id="contcont"]/div/div/div//a';
const titleProduct: string = `//div[@id="tbodyid"]/div::/div/div/h4/a`;
const priceProduct: string = `//div[@id="tbodyid"]/div::/div/div/h5`;
const descriptionProduct: string = `//div[@id="tbodyid"]/div::/div/div/p`;

/*Product*/
export const GetListOfProducts: TGetListOfProductsFunction = async function (
  driver: WebDriver
) {
  const checkIfExistLeastOneProduct: WebElement[] = await driver.findElements(
    By.xpath(productListingSelector)
  );

  return {
    listOfProducts: checkIfExistLeastOneProduct,
  };
};

export const GetDetailsOfProductByPosition: TGetDetailsOfProductByPositionFunction =
  async function (driver: WebDriver, position: number) {
    libsAll.validationsToPosition(position);

    const findTitleProductByPosition: WebElement[] = await driver.findElements(
      By.xpath(libsAll.includePosition(titleProduct, position))
    );

    const findPriceProductByPosition: WebElement[] = await driver.findElements(
      By.xpath(libsAll.includePosition(priceProduct, position))
    );

    const findDescriptionProductByPosition: WebElement[] =
      await driver.findElements(
        By.xpath(libsAll.includePosition(descriptionProduct, position))
      );

    return {
      titleOfProduct: await findTitleProductByPosition[0].getText(),
      priceOfProduct: await findPriceProductByPosition[0].getText(),
      descriptionOfProduct: await findDescriptionProductByPosition[0].getText(),
    };
  };

/*Categories*/
export const GetListOfCategories: TGetListOfCategoriesFunction =
  async function (driver: WebDriver) {
    const checkIfExistLeastOneCategory: WebElement[] =
      await driver.findElements(By.xpath(categoriesListingSelector));

    return {
      listOfCategories: checkIfExistLeastOneCategory,
    };
  };

export const ClickElementOfCategoriesByPosition: TClickElementOfCategoriesByPositionFunction =
  async function (driver: WebDriver, position: number) {
    const { listOfCategories } = await GetListOfCategories(driver);

    libsAll.validationsToArrayFromPosition(position, listOfCategories);

    const onlyElement: any[] = listOfCategories.filter(
      (value: any, index: any) => index === position
    );

    onlyElement[0].click();

    return {
      successful: true,
    };
  };

module.exports = {
  GetListOfProducts,
  GetDetailsOfProductByPosition,
  GetListOfCategories,
  ClickElementOfCategoriesByPosition,
};
