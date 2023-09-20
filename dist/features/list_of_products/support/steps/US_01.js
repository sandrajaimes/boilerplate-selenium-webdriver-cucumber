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
const assert_1 = require("assert");
const cucumber_1 = require("@cucumber/cucumber");
const common_1 = require("../../../../pages/common");
const list_of_products_1 = require("../../../../pages/list_of_products");
let driverOn;
const urlPage = "https://demoblaze.com/";
const titlePageCompare = "STORE";
(0, cucumber_1.Given)("If I open the page in the product list - US_01", function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            driverOn = yield (0, common_1.startDriver)("chrome");
            const { titlePage } = yield (0, common_1.openWeb)(driverOn, urlPage);
            (0, assert_1.strictEqual)(true, titlePage === titlePageCompare);
        }
        catch (e) {
            console.log('Failed: If I open the page in the product list - US_01: ', e);
            yield (0, common_1.closeWeb)(driverOn);
        }
    });
});
(0, cucumber_1.When)("I can see a list of products", function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { listOfProducts } = yield (0, list_of_products_1.getListOfProducts)(driverOn);
            (0, assert_1.strictEqual)(true, listOfProducts.length > 0);
        }
        catch (e) {
            console.log('Failed: I can see a list of products: ', e);
            yield (0, common_1.closeWeb)(driverOn);
        }
    });
});
(0, cucumber_1.Then)("I can get: Title, price and description", function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { titleOfProduct, priceOfProduct, descriptionOfProduct } = yield (0, list_of_products_1.getDetailsOfProductByPosition)(driverOn, 1);
            (0, assert_1.strictEqual)(true, !!titleOfProduct && !!priceOfProduct && !!descriptionOfProduct);
            yield (0, common_1.closeWeb)(driverOn);
        }
        catch (e) {
            console.log('Failed: I can get: Title, price and description ', e);
            yield (0, common_1.closeWeb)(driverOn);
        }
    });
});
