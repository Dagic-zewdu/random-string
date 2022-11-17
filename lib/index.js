"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUnicodeEmoji = exports.generate = void 0;
var check_option_1 = require("./check.option");
var emoji_1 = require("./emoji");
var types_1 = require("./types");
/**
 * @param option- could be number which is the length of the string to be generated || could be option {
 * @returns- random string generated
 */
var generate = function (option) {
    var result = '';
    if (typeof option === 'number' || !option) {
        var opt = option ? option : 16;
        var characters = types_1.alphanumeric;
        result = compute(characters, opt, characters.length);
    }
    else if (typeof option === 'object') {
        if (!option.length) {
            option.length = 16;
        }
        if (option.range) {
            var characters = option.range;
            var charactersLength = characters.toString().length;
            result = compute(characters, option.length, charactersLength);
            result = (0, check_option_1.checkOptions)(result, option);
        }
        else if (option.charset === 'number') {
            result = Math.round(Math.random() * Math.pow(10, option.length)).toString();
            result = (0, check_option_1.checkOptions)(result, option);
        }
        else if (option.charset === 'binary') {
            for (var i = 0; i < option.length; ++i) {
                result += Math.floor(Math.random() * 2);
            }
        }
        else if (option.charset === 'octal') {
            for (var i = 0; i < option.length; ++i) {
                result += Math.floor(Math.random() * 8);
            }
        }
        else if (option.charset === 'hex') {
            result = compute(types_1.hex, option.length, types_1.hex.length);
            result = (0, check_option_1.checkOptions)(result, option);
        }
        else if (option.charset === 'alphabet') {
            result = compute(types_1.alphabet, option.length, types_1.alphabet.length);
            result = (0, check_option_1.checkOptions)(result, option);
        }
        else {
            result = compute(types_1.alphanumeric, option.length, types_1.alphanumeric.length);
            result = (0, check_option_1.checkOptions)(result, option);
        }
    }
    return result;
};
exports.generate = generate;
var compute = function (type, optlen, length) {
    var res = "";
    console.log("COMPUTE RUNNNNNNING.....................", length, "TYPE", optlen);
    for (var i = 0; i < optlen; i += 1) {
        res += type.charAt(Math.floor(Math.random() * length));
    }
    return res;
};
var generateUnicodeEmoji = function (length) {
    var len = length ? length : 16;
    var result = '';
    var charactersLength = emoji_1.emojis.length;
    for (var i = 0; i < len; i += 1) {
        result += emoji_1.emojis[Math.floor(Math.random() * charactersLength)].trim();
    }
    return result;
};
exports.generateUnicodeEmoji = generateUnicodeEmoji;
