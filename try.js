const randomString = require("./lib/index");
const getCryptoRandomInt = require("./lib/cryptoRandomt");

let str = randomString.generate({
  length: 10,
  range: "Feven",
  insertSymbol: true,
  insertSymbol: true,
});
for (let i = 0; i < 10; i++) {
  str = randomString.generate({ charset: "binary", length: 16 });
  console.log("binry :", str);
}
let x = randomString.generate({ charset: "alphanumeric", length: 3 });

console.log(randomString.generateUnicodeEmoji(2));
console.log(x);
for (let i = 0; i < 10; i++) {
  console.log(getCryptoRandomInt.getCryptoRandomInt(26));
}
