"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUnicodeEmoji = exports.generate = void 0;
var check_option_1 = require("./check.option");
var emoji_1 = require("./emoji");
var types_1 = require("./types");
var crypto_1 = __importDefault(require("crypto"));
/**
 * @param option - could be a number which is the length of the string to be generated || could be an option {
 * @returns - random string generated
 */
var generate = function (option) {
    var compute = function (type, optlen, length) {
        var result = '';
        var charactersLength = type.length;
        for (var i = 0; i < length; i += 1) {
            var randomBytes = crypto_1.default.randomBytes(1);
            var randomIndex = Math.floor(randomBytes[0] / 256 * charactersLength);
            result += type.charAt(randomIndex);
        }
        return result;
    };
    var result = '';
    if (typeof option === 'number' || !option) {
        var opt = option ? option : 16;
        var characters = types_1.alphanumeric;
        var charactersLength = characters.length;
        result = compute(characters, charactersLength, opt);
    }
    else if (typeof option === 'object') {
        if (!option.length) {
            option.length = 16;
        }
        if (option.range) {
            var characters = option.range;
            var charactersLength = characters.toString().length;
            result = compute(characters, charactersLength, option.length);
            result = (0, check_option_1.checkOptions)(result, option);
        }
        else if (option.charset === 'number') {
            var max = Math.pow(10, option.length) - 1;
            var randomBytes = crypto_1.default.randomBytes(Math.ceil(option.length / 2));
            var randomValue = parseInt(randomBytes.toString('hex'), 16) % max; // Converting the random bytes to a number within the desired range
            result = randomValue.toString();
            result = (0, check_option_1.checkOptions)(result, option);
        }
        else if (option.charset === 'binary') {
            result = compute(types_1.binary, 2, option.length);
        }
        else if (option.charset === 'octal') {
            result = compute(types_1.octal, 8, option.length);
        }
        else if (option.charset === 'hex') {
            var charactersLength = types_1.hex.length;
            result = compute(types_1.hex, charactersLength, option.length);
            result = (0, check_option_1.checkOptions)(result, option);
        }
        else if (option.charset === 'alphabet') {
            var charactersLength = types_1.alphabet.length;
            result = compute(types_1.alphabet, charactersLength, option.length);
            result = (0, check_option_1.checkOptions)(result, option);
        }
        else {
            var charactersLength = types_1.alphanumeric.length;
            result = compute(types_1.alphanumeric, charactersLength, option.length);
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
        var randomBytes = crypto_1.default.randomBytes(1);
        var randomIndex = Math.floor(randomBytes[0] / 256 * charactersLength);
        result += emoji_1.emojis[randomIndex].trim();
    }
    return result;
};
exports.generateUnicodeEmoji = generateUnicodeEmoji;
