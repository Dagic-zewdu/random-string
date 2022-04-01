"use strict";
// function getCryptoRandomInt(min:any, max: any) {       
//     var byteArray = new Uint8Array(1);
//     crypto.getRandomValues(byteArray);
//     let randomNum = '0.' + byteArray[0].toString();
//     randomNum = Math.floor(Number(randomNum) * (max - min + 1)) + min;
//     console.log("Randome Generated is ",randomNum);
//     return randomNum;
// }
// console.log("Randome Generated is ",getCryptoRandomInt(0, 80));
var getRandomValues = require('get-random-values');
var array = new Uint8Array(1);
getRandomValues(array);
console.log("Randome gen is : ", array);
