"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
/**
 *
 * @param option- could be number which is the length of the string to be generated || could be option {
   charset?:"alpanumeric"|"number",
   disableCapitalLetters?:boolean, //disable capital letter
   char?:string,
   length: number,
   disableSmallLetters?:boolean,
   disableNumbers?:boolean
}
 * @returns- random string generated
 */
var generate = function (option) {
    var result = '';
    if (typeof option === 'number') {
        var opt = option ? option : 8;
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < opt; i += 1) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }
    else if (typeof option === 'object') {
        if (!option.length) {
            option['length'] = 8;
        }
        if (option.char) { //sdfd
            var characters = option.char;
            var charactersLength = characters.toString().length;
            for (var i = 0; i < option.length; i += 1) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
        }
        else if (option.charset === "number") {
            result = Math.round(Math.random() * Math.pow(10, option.length)).toString();
        }
        else if (option.disableCapitalLetters) {
            var characters = option.charset === 'alphabet' ? 'abcdefghijklmnopqrstuvwxyz' : 'abcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < option.length; i += 1) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
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
            var characters = '0123456789ABCDEFabcdef';
            var charactersLength = characters.length;
            for (var i = 0; i < option.length; i += 1) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
        }
        else if (option.charset === 'alphabet') {
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < option.length; i += 1) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
        }
        else {
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < option.length; i += 1) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
        }
    }
    return result;
};
exports.generate = generate;
