import { checkOptions } from './check.option';
import { emojis } from './emoji';
import { alphabet, alphanumeric, hex, options } from './types';

/**
 * @param option- could be number which is the length of the string to be generated || could be option {
 * @returns- random string generated
 */
export const generate = (option: number | options) => {
  let result: string | number = '';
  if (typeof option === 'number' || !option) {
    let opt = option ? option : 16;
    const characters = alphanumeric;
   result= compute(characters, opt, characters.length);
  } else if (typeof option === 'object') {
    if (!option.length) {
      option.length = 16;
    }
    if (option.range) {
      const characters = option.range;
      const charactersLength = characters.toString().length;
      result= compute(characters,option.length, charactersLength);
      result = checkOptions(result, option);
    } else if (option.charset === 'number') {
      result = Math.round(Math.random() * Math.pow(10, option.length)).toString();
      result = checkOptions(result, option);
    } else if (option.charset === 'binary') {
      for (let i = 0; i < option.length; ++i) {
        result += Math.floor(Math.random() * 2);
      }
    } else if (option.charset === 'octal') {
      for (let i = 0; i < option.length; ++i) {
        result += Math.floor(Math.random() * 8);
      }
    } else if (option.charset === 'hex') {
      result= compute(hex, option.length, hex.length);
      result = checkOptions(result, option);
    } else if (option.charset === 'alphabet') {
      result= compute(alphabet, option.length, alphabet.length);
      result = checkOptions(result, option);
    } else {
      result= compute(alphanumeric,option.length, alphanumeric.length);
      result = checkOptions(result, option);
    }
  }
  return result;
};
const compute = (type: string ,optlen: number, length: number) => {
  let res= "";
  for (let i = 0; i < optlen; i += 1) {
    res += type.charAt(Math.floor(Math.random() * length));
  }
  return res;
}

export const generateUnicodeEmoji = (length: number) => {
  let len = length ? length : 16;
  let result = '';

  const charactersLength = emojis.length;
  for (let i = 0; i < len; i += 1) {
    result += emojis[Math.floor(Math.random() * charactersLength)].trim();
  }
  return result;
};
