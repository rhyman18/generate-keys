import generateRandomString from "./GenerateRandomString";

const styles = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  fgGreen: "\x1b[32m",
  fgCyan: "\x1b[36m",
  fgRed: "\x1b[31m",
};

const greaterSign = `${styles.fgGreen}>${styles.reset}`;

const printRandomString = (length: number = 40): void => {
  console.log("\r");
  if (!isNaN(length)) {
    console.log(`${greaterSign} Proses generate...`);
    const randomString = generateRandomString(length);
    console.log(`${greaterSign} Berhasil generate, gass copas mang!\n`);
    console.log(
      styles.bold + styles.fgCyan + randomString + styles.reset + "\n"
    );
  } else {
    console.log(
      `${greaterSign} ${styles.fgRed}Loh kok bisa pilih yang lain?${styles.reset}`
    );
  }
};

export default printRandomString;
