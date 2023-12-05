"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJsonFromFile = exports.env = void 0;
const env = key => {
  const value = process.env[key];
  if (!value) {
    throw Error("No environment variable found for ".concat(key));
  }
  return value;
};
exports.env = env;
const getJsonFromFile = path => {
  return require("".concat(process.cwd()).concat(path));
};
exports.getJsonFromFile = getJsonFromFile;