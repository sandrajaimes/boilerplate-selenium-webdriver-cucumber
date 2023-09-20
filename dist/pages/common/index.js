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
exports.closeWeb = exports.openWeb = exports.startDriver = void 0;
require("dotenv").config();
const index_1 = require("../../drivers/index");
/*Website manager*/
function startDriver(driver) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!driver) {
                new Error("The driver must be defined");
            }
            return yield (0, index_1.start)(driver);
        }
        catch (e) {
            console.log('It was not possible to create the driver instance: ', e);
            throw new Error('It was not possible to create the driver instance');
        }
    });
}
exports.startDriver = startDriver;
function openWeb(driver, website) {
    return __awaiter(this, void 0, void 0, function* () {
        yield driver.get(website);
        const getTitleWindow = yield driver.getTitle();
        yield driver
            .manage()
            .setTimeouts({
            implicit: parseInt(process.env.MAXIMUM_WAITING_TIME_PER_ITEM || '3000'),
        });
        return {
            titlePage: getTitleWindow,
        };
    });
}
exports.openWeb = openWeb;
function closeWeb(driver) {
    return __awaiter(this, void 0, void 0, function* () {
        yield driver.close();
        yield driver.quit();
    });
}
exports.closeWeb = closeWeb;
module.exports = {
    startDriver,
    openWeb,
    closeWeb
};
