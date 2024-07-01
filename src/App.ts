#!/usr/bin/env node

import printRandomString from "./script/PrintRandomString";
import { select, Separator } from "@inquirer/prompts";

const App = async () => {
  const answers: number = await select({
    message: "Mau bikin keys yang mana cuy?",
    choices: [
      new Separator(),
      { name: "16 digit xkey", value: 16 },
      { name: "40 digit xkey", value: 40 },
    ],
  });

  printRandomString(answers);
};

App();
