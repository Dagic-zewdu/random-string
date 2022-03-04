"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomString = void 0;
// returns empty string when length is not provided
var randomString = function (length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
exports.randomString = randomString;
