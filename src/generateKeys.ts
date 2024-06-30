import generateRandomString from "./script/GenerateRandomString";

const generateKeys = (length: number = 40): string => {
  if (!Number.isInteger(length) || length <= 0) {
    return "Invalid length. Please provide a positive integer.";
  } else if (length > 100) {
    length = 100;
  }
  return generateRandomString(length);
};

export { generateKeys };
