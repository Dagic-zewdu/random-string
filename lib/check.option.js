"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOptions = void 0;
var types_1 = require("./types");
var checkOptions = function (result, option, charset) {
    var newResult = result;
    if (option.insertSymbol) {
        var characters = charset ? (types_1.symbols + charset + types_1.symbols) :
            option.charset === "number" ? (types_1.symbols + types_1.number + types_1.symbols) :
                option.charset === "alphabet" ? (types_1.symbols + types_1.alphabet + types_1.symbols) :
                    (types_1.symbols + types_1.alphanumeric + types_1.symbols);
        var charactersLength = characters.length;
        for (var i = 0; i < option.length; i += 1) {
            newResult += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }
    if (option.disableCapitalLetters) {
        newResult = result.toLowerCase();
    }
    else if (option.disableSmallLetters) {
        newResult = result.toUpperCase();
    }
    return newResult;
};
exports.checkOptions = checkOptions;
