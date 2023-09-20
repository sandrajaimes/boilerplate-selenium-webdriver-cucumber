"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clickElementOfCategoriesByPosition = exports.getDetailsOfProductByPosition = exports.getListOfProducts = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const index_1 = require("./libs/index");
/*Selectors*/
const productListingSelector = '//div[@id="tbodyid"]//div';
const categoriesListingSelector = '//*[@id="contcont"]/div/div/div//a';
const titleProduct = `//div[@id="tbodyid"]/div::/div/div/h4/a`;
const priceProduct = `//div[@id="tbodyid"]/div::/div/div/h5`;
const descriptionProduct = `//div[@id="tbodyid"]/div::/div/div/p`;
/*Product*/
function getListOfProducts(driver) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkIfExistLeastOneProduct = yield driver.findElements(selenium_webdriver_1.By.xpath(productListingSelector));
        return {
            listOfProducts: checkIfExistLeastOneProduct,
        };
    });
}
exports.getListOfProducts = getListOfProducts;
function getDetailsOfProductByPosition(driver, position) {
    return __awaiter(this, void 0, void 0, function* () {
        index_1.default.validationsToPosition(position);
        const findTitleProductByPosition = yield driver.findElements(selenium_webdriver_1.By.xpath(index_1.default.includePosition(titleProduct, position)));
        const findPriceProductByPosition = yield driver.findElements(selenium_webdriver_1.By.xpath(index_1.default.includePosition(priceProduct, position)));
        const findDescriptionProductByPosition = yield driver.findElements(selenium_webdriver_1.By.xpath(index_1.default.includePosition(descriptionProduct, position)));
        return {
            titleOfProduct: yield findTitleProductByPosition[0].getText(),
            priceOfProduct: yield findPriceProductByPosition[0].getText(),
            descriptionOfProduct: yield findDescriptionProductByPosition[0].getText()
        };
    });
}
exports.getDetailsOfProductByPosition = getDetailsOfProductByPosition;
/*Categories*/
function getListOfCategories(driver) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkIfExistLeastOneCategory = yield driver.findElements(selenium_webdriver_1.By.xpath(categoriesListingSelector));
        return {
            listOfCategories: checkIfExistLeastOneCategory,
        };
    });
}
function clickElementOfCategoriesByPosition(driver, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const { listOfCategories } = yield getListOfCategories(driver);
        index_1.default.validationsToArrayFromPosition(position, listOfCategories);
        const onlyElement = listOfCategories.filter((value, index) => index === position);
        onlyElement[0].click();
        return {
            successful: true
        };
    });
}
exports.clickElementOfCategoriesByPosition = clickElementOfCategoriesByPosition;
module.exports = {
    getListOfProducts,
    getDetailsOfProductByPosition,
    getListOfCategories,
    clickElementOfCategoriesByPosition
};
