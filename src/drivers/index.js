const { createChromeDriver } = require("./chrome");

async function start(defineDrive) {
  const allDriver = {
    chrome: await createChromeDriver()
  };

  return allDriver[`${defineDrive}`];
}

module.exports = {
  start,
};
