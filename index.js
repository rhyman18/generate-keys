import { generateRandomString } from "./script/GenerateRandomString.js";

const generateKeys = (length = 40) => {
  if (!Number.isInteger(length) || length <= 0) {
    return "Invalid length. Please provide a positive integer.";
  } else if (length > 100) {
    length = 100;
  }
  return generateRandomString(length);
};

export { generateKeys };
