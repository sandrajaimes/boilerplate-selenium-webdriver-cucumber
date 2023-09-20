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
const reporter = require("cucumber-html-reporter");
const { resolve } = require("path");
const fs = require("fs");
const moment2 = require('moment');
let options;
const getLatestFolder = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const folderPath = resolve("dist/report/default");
        return yield new Promise((resolve, reject) => {
            fs.readdir(folderPath, (err, files) => {
                if (err) {
                    console.error("Error reading folder:", err);
                    reject(err);
                }
                resolve(files.reduce((accumulator, currentValue) => parseInt(accumulator) > parseInt(currentValue)
                    ? accumulator
                    : currentValue));
            });
        });
    });
};
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const defineFileName = yield getLatestFolder();
            options = {
                theme: "bootstrap",
                jsonFile: `dist/report/default/${defineFileName}/${defineFileName}.json`,
                output: `dist/report/cucumber/${moment2().format("YYYYMMDDHHmmss")}.html`,
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    Browser: "Chrome  54.0.2840.98",
                    Platform: "Windows 10",
                    Parallel: "Scenarios",
                    Executed: "Remote",
                },
                "failedSummaryReport": true,
            };
            reporter.generate(options);
        }
        catch (e) {
            console.log('It was not possible to create the report html', e);
            throw new Error('It was not possible to create the report html');
        }
    });
})();
