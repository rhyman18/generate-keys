import {
  GenerateRandomString_default
} from "./chunk-NHO5M4JN.mjs";

// src/generateKeys.ts
var generateKeys = (length = 40) => {
  if (!Number.isInteger(length) || length <= 0) {
    return "Invalid length. Please provide a positive integer.";
  } else if (length > 100) {
    length = 100;
  }
  return GenerateRandomString_default(length);
};
export {
  generateKeys
};
