const randomString = require('./lib/index');

let str = randomString.generate({
  length: 10,
  range: 'Feven',
  insertSymbol: true,
  insertSymbol: true,
});

console.log(str);
