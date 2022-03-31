"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCryptoRandomInt = void 0;
var getCryptoRandomInt = function (max) {
    var getRandomValues = require('get-random-values'), array = new Uint8Array(1);
    var min = 0;
    var byteArray = new Uint8Array(1);
    getRandomValues(byteArray);
    var randomNum = Number('0.' + byteArray[0].toString());
    randomNum = Math.floor(Number(randomNum) * (max - min + 1)) + min;
    return randomNum;
};
exports.getCryptoRandomInt = getCryptoRandomInt;
