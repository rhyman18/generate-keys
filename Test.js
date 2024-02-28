// Example usage for implements random string generator to your variabel
import { generateKeys } from "./index.js";

// Example of default length
const myDefaultKeys = generateKeys();
console.log(myDefaultKeys);

// Example of dynamic length
const myCustomKeys = generateKeys(18);
console.log(myCustomKeys);

// Example of Invalid
const myErrKeys = generateKeys("Dont");
console.log(myErrKeys);
