"use strict";

var _cucumberHtmlReporter = _interopRequireDefault(require("cucumber-html-reporter"));
var _parseEnv = require("../env/parseEnv");
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config({
  path: (0, _parseEnv.env)('COMMON_CONFIG_FILE')
});
const options = {
  theme: 'bootstrap',
  jsonFile: (0, _parseEnv.env)('JSON_REPORT_FILE'),
  output: (0, _parseEnv.env)('HTML_REPORT_FILE'),
  screenshotsDirectory: (0, _parseEnv.env)('SCREENSHOT_PATH'),
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: false
};
_cucumberHtmlReporter.default.generate(options);