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
export {
  generateKeys
};
