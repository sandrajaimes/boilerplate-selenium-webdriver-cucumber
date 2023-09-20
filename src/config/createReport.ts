const reporter = require("cucumber-html-reporter");
const {resolve} = require("path");
const fs = require("fs");
const moment2: any = require('moment');

let options: any;

const getLatestFolder = async function () {
  const folderPath: string = resolve("dist/report/default");

  return await new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err: any, files: any) => {
      if (err) {
        console.error("Error reading folder:", err);
        reject(err);
      }

      resolve(
        files.reduce((accumulator: any, currentValue: any) =>
          parseInt(accumulator) > parseInt(currentValue)
            ? accumulator
            : currentValue
        )
      );
    });
  });
};

(async function (){
  try{
    const defineFileName = await getLatestFolder();

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
  }catch (e) {
    console.log('It was not possible to create the report html', e)
    throw new Error('It was not possible to create the report html')
  }
})()
