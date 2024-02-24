#! /usr/bin/env node

import inquirer from "inquirer";
import { printRandomString } from "./script/PrintRandomString.js";

inquirer
  .prompt([
    {
      type: "list",
      name: "length",
      message: "Mau bikin keys yang mana cuy?",
      choices: [new inquirer.Separator(), "16 digit xkey", "40 digit xkey"],
    },
  ])
  .then((answers) => {
    printRandomString(answers);
  });
