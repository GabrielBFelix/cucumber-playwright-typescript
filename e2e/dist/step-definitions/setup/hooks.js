"use strict";

var _cucumber = require("@cucumber/cucumber");
var _parseEnv = require("../../env/parseEnv");
(0, _cucumber.Before)(async function (scenario) {
  console.log("Running cucumber scenario ".concat(scenario.pickle.name));
  const contextOptions = {
    recordVideo: {
      dir: "".concat((0, _parseEnv.env)('VIDEO_PATH')).concat(scenario.pickle.name)
    }
  };
  return await this.init(contextOptions);
});
(0, _cucumber.After)(async function (scenario) {
  var _scenario$result;
  const {
    screen: {
      page,
      browser
    }
  } = this;
  const scenarioStatus = (_scenario$result = scenario.result) === null || _scenario$result === void 0 ? void 0 : _scenario$result.status;
  if (scenarioStatus === 'FAILED') {
    const screenshot = await page.screenshot({
      path: "".concat((0, _parseEnv.env)('SCREENSHOT_PATH')).concat(scenario.pickle.name, ".png")
    });
    this.attach(screenshot, 'image/png');
  }
  await browser.close();
  return browser;
});