"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOptions = void 0;
var types_1 = require("./types");
var checkOptions = function (result, option) {
    var newResult = result;
    if (option.insertSymbol) {
        newResult = '';
        var characters = option.range
            ? option.range + types_1.symbols + option.range
            : option.charset === 'number'
                ? types_1.numberSymbol
                : option.charset === 'alphabet'
                    ? types_1.alphabetSymbol
                    : types_1.alphabetNumericSymbol;
        var charactersLength = characters.length;
        for (var i = 0; i < option.length; i++) {
            newResult += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }
    if (option.symbolsOnly) {
        newResult = '';
        var charactersLength = types_1.symbols.length;
        for (var i = 0; i < option.length; i += 1) {
            newResult += types_1.symbols.charAt(Math.floor(Math.random() * charactersLength));
        }
    }
    if (option.prefix) {
        newResult = option.prefix + newResult;
    }
    if (option.suffix) {
        newResult = newResult + option.suffix;
    }
    if (option.lowerCaseOnly) {
        return newResult.toLowerCase();
    }
    if (option.upperCaseOnly) {
        return newResult.toUpperCase();
    }
    return newResult;
};
exports.checkOptions = checkOptions;
