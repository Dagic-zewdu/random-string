"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUnicodeEmoji = exports.generate = void 0;
var check_option_1 = require("./check.option");
var emoji_1 = require("./emoji");
var types_1 = require("./types");
var cryptorandomt_1 = require("./cryptorandomt");
/**
 * @param option- could be number which is the length of the string to be generated || could be option {
 * @returns- random string generated
 */
var generate = function (option) {
    var result = '';
    if (typeof option === 'number' || !option) {
        var opt = option ? option : 16;
        var characters = types_1.alphanumeric;
        var charactersLength = characters.length;
        for (var i = 0; i < opt; i += 1) {
            result += characters.charAt((0, cryptorandomt_1.getCryptoRandomInt)(charactersLength));
        }
    }
    else if (typeof option === 'object') {
        if (!option.length) {
            option.length = 16;
        }
        if (option.range) {
            var characters = option.range;
            var charactersLength = characters.toString().length;
            for (var i = 0; i < option.length; i += 1) {
                result += characters.charAt((0, cryptorandomt_1.getCryptoRandomInt)(charactersLength));
            }
            result = (0, check_option_1.checkOptions)(result, option);
        }
        else if (option.charset === 'number') {
            result = Math.round((0, cryptorandomt_1.getCryptoRandomInt)(Math.pow(10, option.length)));
            result = (0, check_option_1.checkOptions)(String(result), option);
        }
        else if (option.charset === 'binary') {
            for (var i = 0; i < option.length; ++i) {
                result += (0, cryptorandomt_1.getCryptoRandomInt)(1);
            }
        }
        else if (option.charset === 'octal') {
            for (var i = 0; i < option.length; ++i) {
                result += (0, cryptorandomt_1.getCryptoRandomInt)(7);
            }
        }
        else if (option.charset === 'hex') {
            var charactersLength = types_1.hex.length;
            for (var i = 0; i < option.length; i += 1) {
                result += types_1.hex.charAt((0, cryptorandomt_1.getCryptoRandomInt)(charactersLength));
            }
            result = (0, check_option_1.checkOptions)(result, option);
        }
        else if (option.charset === 'alphabet') {
            var charactersLength = types_1.alphabet.length;
            for (var i = 0; i < option.length; i += 1) {
                result += types_1.alphabet.charAt((0, cryptorandomt_1.getCryptoRandomInt)(charactersLength));
            }
            result = (0, check_option_1.checkOptions)(result, option);
        }
        else {
            var charactersLength = types_1.alphanumeric.length;
            for (var i = 0; i < option.length; i += 1) {
                result += types_1.alphanumeric.charAt((0, cryptorandomt_1.getCryptoRandomInt)(charactersLength));
            }
            result = (0, check_option_1.checkOptions)(result, option);
        }
    }
    return result;
};
exports.generate = generate;
var generateUnicodeEmoji = function (length) {
    var len = length ? length : 16;
    var result = '';
    var charactersLength = emoji_1.emojis.length;
    for (var i = 0; i < len; i += 1) {
        result += emoji_1.emojis[(0, cryptorandomt_1.getCryptoRandomInt)(charactersLength)].trim();
    }
    return result;
};
exports.generateUnicodeEmoji = generateUnicodeEmoji;
