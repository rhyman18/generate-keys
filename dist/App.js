#!/usr/bin/env node
"use strict";

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

// src/script/PrintRandomString.ts
var styles = {
  reset: "\x1B[0m",
  bold: "\x1B[1m",
  fgGreen: "\x1B[32m",
  fgCyan: "\x1B[36m",
  fgRed: "\x1B[31m"
};
var greaterSign = `${styles.fgGreen}>${styles.reset}`;
var printRandomString = (length = 40) => {
  console.log("\r");
  if (!isNaN(length)) {
    console.log(`${greaterSign} Proses generate...`);
    const randomString = GenerateRandomString_default(length);
    console.log(`${greaterSign} Berhasil generate, gass copas mang!
`);
    console.log(
      styles.bold + styles.fgCyan + randomString + styles.reset + "\n"
    );
  } else {
    console.log(
      `${greaterSign} ${styles.fgRed}Loh kok bisa pilih yang lain?${styles.reset}`
    );
  }
};
var PrintRandomString_default = printRandomString;

// src/App.ts
var import_prompts = require("@inquirer/prompts");
var App = async () => {
  const answers = await (0, import_prompts.select)({
    message: "Mau bikin keys yang mana cuy?",
    choices: [
      new import_prompts.Separator(),
      { name: "16 digit xkey", value: 16 },
      { name: "40 digit xkey", value: 40 }
    ]
  });
  PrintRandomString_default(answers);
};
App();
