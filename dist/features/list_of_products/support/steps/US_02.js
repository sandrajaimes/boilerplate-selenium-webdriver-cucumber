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
const titleFirstProductCompare = "Samsung galaxy s6";
const priceOfFirstProductCompare = "$360";
const descriptionOfFistProductCompare = `The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.`;
(0, cucumber_1.Given)("If I open the page in the product list - US_02", function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            driverOn = yield (0, common_1.startDriver)("chrome");
            const { titlePage } = yield (0, common_1.openWeb)(driverOn, urlPage);
            const { listOfProducts } = yield (0, list_of_products_1.getListOfProducts)(driverOn);
            (0, assert_1.strictEqual)(true, titlePage === titlePageCompare);
            (0, assert_1.strictEqual)(true, listOfProducts.length > 0);
        }
        catch (e) {
            console.log('Failed: If I open the page in the product list - US_02: ', e);
            yield (0, common_1.closeWeb)(driverOn);
        }
    });
});
(0, cucumber_1.When)("When you selected the Phones option", function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { successful } = yield (0, list_of_products_1.clickElementOfCategoriesByPosition)(driverOn, 1);
            (0, assert_1.strictEqual)(true, successful);
        }
        catch (e) { }
    });
});
(0, cucumber_1.Then)("Only products corresponding to: Phones are visible", function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { titleOfProduct, priceOfProduct, descriptionOfProduct } = yield (0, list_of_products_1.getDetailsOfProductByPosition)(driverOn, 1);
            (0, assert_1.strictEqual)(true, titleOfProduct === titleFirstProductCompare);
            (0, assert_1.strictEqual)(true, priceOfProduct === priceOfFirstProductCompare);
            (0, assert_1.strictEqual)(true, descriptionOfProduct === descriptionOfFistProductCompare);
            yield (0, common_1.closeWeb)(driverOn);
        }
        catch (e) {
            yield (0, common_1.closeWeb)(driverOn);
        }
    });
});
