"use strict";

var _cucumber = require("@cucumber/cucumber");
var _navigationBehavior = require("../support/navigation-behavior");
(0, _cucumber.Given)(/^I am on the "([^"]*)" page$/, async function (pageId) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log("I am on the ".concat(pageId, " page"));
  await (0, _navigationBehavior.navigateToPage)(page, pageId, globalConfig);
});