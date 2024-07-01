"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  generateKeys: () => generateKeys
});
module.exports = __toCommonJS(src_exports);

// src/script/GenerateRandomString.ts
var generateRandomString = (length = 40) => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
};
var GenerateRandomString_default = generateRandomString;

// src/generateKeys.ts
var generateKeys = (length = 40) => {
  if (!Number.isInteger(length) || length <= 0) {
    return "Invalid length. Please provide a positive integer.";
  } else if (length > 100) {
    length = 100;
  }
  return GenerateRandomString_default(length);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateKeys
});
