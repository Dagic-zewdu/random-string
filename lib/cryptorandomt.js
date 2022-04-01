"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCryptoRandomInt = void 0;
var crypto = require('crypto');
var getCryptoRandomInt = function (max) {
    var min = 0;
    var array = crypto.randomBytes(1).toJSON().data;
    var randomNum = Number('0.' + array[0]);
    randomNum = Math.floor(randomNum * (max - min + 1)) + min;
    return randomNum;
};
exports.getCryptoRandomInt = getCryptoRandomInt;
