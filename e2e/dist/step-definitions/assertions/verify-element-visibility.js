"use strict";

var _cucumber = require("@cucumber/cucumber");
var _test = require("@playwright/test");
(0, _cucumber.Then)(/^the "([^"]*)" should contain the text "(.*)"$/, async function (elementKey, expectedElementText) {
  const {
    screen: {
      page
    }
  } = this;
  console.log("the ".concat(elementKey, " should contain the text ").concat(expectedElementText));
  const content = await page.textContent("[data-id='contacts']");
  (0, _test.expect)(content).toBe(expectedElementText);
});
(0, _cucumber.Then)(/^the "([^"]*)" should be displayed$/, async function (elementKey) {
  const {
    screen: {
      page
    }
  } = this;
  console.log("the ".concat(elementKey, " should be displayed"));
  const locator = page.locator("[data-id='header-logo']");
  await (0, _test.expect)(locator).toBeVisible();
});