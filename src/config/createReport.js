const reporter = require("cucumber-html-reporter");
const path = require("path");
const fs = require("fs");
const moment = require("moment");

let options;

const getLatestFolder = async function () {
  const folderPath = path.resolve("src/report/default");

  return await new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error("Error reading folder:", err);
        reject(err);
      }

      resolve(
        files.reduce((accumulator, currentValue) =>
          parseInt(accumulator) > parseInt(currentValue)
            ? accumulator
            : currentValue
        )
      );
    });
  });
};

(async function (){
  const defineFileName = await getLatestFolder();

  options = {
    theme: "bootstrap",
    jsonFile: `src/report/default/${defineFileName}/${defineFileName}.json`,
    output: `src/report/cucumber/${moment().format("YYYYMMDDHHmmss")}.html`,
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
    failedSummaryReport: true,
  };

  reporter.generate(options);
})()
