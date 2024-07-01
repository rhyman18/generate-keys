#!/usr/bin/env node
import {
  GenerateRandomString_default
} from "./chunk-NHO5M4JN.mjs";

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
import { select, Separator } from "@inquirer/prompts";
var App = async () => {
  const answers = await select({
    message: "Mau bikin keys yang mana cuy?",
    choices: [
      new Separator(),
      { name: "16 digit xkey", value: 16 },
      { name: "40 digit xkey", value: 40 }
    ]
  });
  PrintRandomString_default(answers);
};
App();
