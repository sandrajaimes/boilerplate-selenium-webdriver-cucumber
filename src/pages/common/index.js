require("dotenv").config();

const { start } = require("../../drivers");

/*Website manager*/
function startDriver(driver) {
  if (typeof driver !== "string") {
    throw new Error("The driver param must be string");
  }

  if (!driver) {
    throw new Error("The driver must be defined");
  }

  return start(driver);
}

async function openWeb(driver, website) {
  await driver.get(website);
  const getTitleWindow = await driver.getTitle();
  await driver
    .manage()
    .setTimeouts({
      implicit: parseInt(process.env.MAXIMUM_WAITING_TIME_PER_ITEM),
    });

  return {
    titlePage: getTitleWindow,
  };
}

async function closeWeb(driver) {
  await driver.close();
  await driver.quit();
}

module.exports = {
  startDriver,
  openWeb,
  closeWeb,
};
