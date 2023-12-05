"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScenarioWorld = void 0;
var _playwright = _interopRequireDefault(require("playwright"));
var _parseEnv = require("../../env/parseEnv");
var _cucumber = require("@cucumber/cucumber");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class ScenarioWorld extends _cucumber.World {
  constructor(options) {
    super(options);
    _defineProperty(this, "globalConfig", void 0);
    _defineProperty(this, "screen", void 0);
    _defineProperty(this, "newBrowser", async () => {
      const automationBrowsers = ['chromium', 'firefox', 'webkit'];
      const automationBrowser = (0, _parseEnv.env)('UI_AUTOMATION_BROWSER');
      const browserType = _playwright.default[automationBrowser];
      const browser = await browserType.launch({
        headless: process.env.HEADLESS !== 'false',
        args: ['--disable-web-security', '--disable-features=IsolateOrigins,site-per-process']
      });
      return browser;
    });
    this.globalConfig = options.parameters;
  }
  async init(contextOptions) {
    var _this$screen, _this$screen2, _this$screen3;
    await ((_this$screen = this.screen) === null || _this$screen === void 0 || (_this$screen = _this$screen.page) === null || _this$screen === void 0 ? void 0 : _this$screen.close());
    await ((_this$screen2 = this.screen) === null || _this$screen2 === void 0 || (_this$screen2 = _this$screen2.context) === null || _this$screen2 === void 0 ? void 0 : _this$screen2.close());
    await ((_this$screen3 = this.screen) === null || _this$screen3 === void 0 || (_this$screen3 = _this$screen3.browser) === null || _this$screen3 === void 0 ? void 0 : _this$screen3.close());
    const browser = await this.newBrowser();
    const context = await browser.newContext(contextOptions);
    const page = await context.newPage();
    this.screen = {
      browser,
      context,
      page
    };
    return this.screen;
  }
}
exports.ScenarioWorld = ScenarioWorld;
(0, _cucumber.setWorldConstructor)(ScenarioWorld);