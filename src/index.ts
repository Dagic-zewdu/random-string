import { checkOptions } from './check.option';
import { emojis } from './emoji';
import { alphabet, alphanumeric, hex, options } from './types';
import {getCryptoRandomInt} from './cryptorandomt'
/**
 * @param option- could be number which is the length of the string to be generated || could be option {
 * @returns- random string generated
 */

export const generate = (option: number | options) => {
  let result: string | number = '';
  if (typeof option === 'number' || !option) {
    let opt = option ? option : 16;
    const characters = alphanumeric;
    const charactersLength = characters.length;
    for (let i = 0; i < opt; i += 1) {
      result += characters.charAt(Math.floor(getCryptoRandomInt(charactersLength)));
    }
  } else if (typeof option === 'object') {
    if (!option.length) {
      option.length = 16;
    }
    if (option.range) {
      const characters = option.range;
      const charactersLength = characters.toString().length;
      for (let i = 0; i < option.length; i += 1) {
        result += characters.charAt(Math.floor(getCryptoRandomInt(charactersLength)));
      }
      result = checkOptions(result, option);
    } else if (option.charset === 'number') {
      result = Math.round(getCryptoRandomInt( Number(Math.pow(10, option.length)).toString()));
      result = checkOptions(String(result), option);
    } else if (option.charset === 'binary') {
      for (let i = 0; i < option.length; ++i) {
        result += Math.floor(getCryptoRandomInt(2));
      }
    } else if (option.charset === 'octal') {
      for (let i = 0; i < option.length; ++i) {
        result += Math.floor(getCryptoRandomInt(8) );
      }
    } else if (option.charset === 'hex') {
      const charactersLength = hex.length;
      for (let i = 0; i < option.length; i += 1) {
        result += hex.charAt(Math.floor(getCryptoRandomInt(charactersLength)));
      }
      result = checkOptions(result, option);
    } else if (option.charset === 'alphabet') {
      const charactersLength = alphabet.length;
      for (let i = 0; i < option.length; i += 1) {
        result +=alphabet.charAt(Math.floor(getCryptoRandomInt(charactersLength)));

      }
      result = checkOptions(result, option);
    } else {
      const charactersLength = alphanumeric.length;
      for (let i = 0; i < option.length; i += 1) {
        console.log(result);
        result += alphanumeric.charAt(Math.floor(getCryptoRandomInt(charactersLength)));
      }
      result = checkOptions(result, option);
    }
  }
  return result;
};

export const generateUnicodeEmoji = (length: number) => {
  let len = length ? length : 16;
  let result = '';

  const charactersLength = emojis.length;
  for (let i = 0; i < len; i += 1) {
    result += emojis[Math.floor(getCryptoRandomInt(charactersLength))].trim();
  }
  return result;
};
