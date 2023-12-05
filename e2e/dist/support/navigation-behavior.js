"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigateToPage = void 0;
const navigateToPage = async (page, pageId, _ref) => {
  let {
    pagesConfig,
    hostsConfig
  } = _ref;
  const {
    UI_AUTOMATION_HOST: hostName = 'localhost'
  } = process.env;
  const hostPath = hostsConfig["".concat(hostName)];
  console.log("hostPath ", hostPath);
  const url = new URL(hostPath);
  console.log("url ", url);
  const pagesConfigItem = pagesConfig[pageId];
  url.pathname = pagesConfigItem.route;
  console.log("pages route ", url.pathname);
  await page.goto(url.href);
};
exports.navigateToPage = navigateToPage;