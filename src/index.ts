import { checkOptions } from './check.option';
import { emojis } from './emoji';
import { alphabet, alphanumeric, binary, octal, hex, options } from './types';
import crypto from 'crypto';

/**
 * @param option - could be a number which is the length of the string to be generated || could be an option {
 * @returns - random string generated
 */
export const generate = (option: number | options) => {
  const compute = (type: string ,optlen: number, length: number) => {
    let result = '';
    const charactersLength = type.length;
    for (let i = 0; i < length; i += 1) {
      const randomBytes = crypto.randomBytes(1);
      const randomIndex = Math.floor(randomBytes[0] / 256 * charactersLength);
      result += type.charAt(randomIndex);
    }
    return result;
  }
  let result: string | number = '';
  if (typeof option === 'number' || !option) {
    let opt = option ? option : 16;
    const characters = alphanumeric;
    const charactersLength = characters.length;
    result = compute(characters, charactersLength, opt);
  } else if (typeof option === 'object') {
    if (!option.length) {
      option.length = 16;
    }
    if (option.range) {
      const characters = option.range;
      const charactersLength = characters.toString().length;
      result = compute(characters, charactersLength, option.length);
      result = checkOptions(result, option);
    } else if (option.charset === 'number') {
      const max = Math.pow(10, option.length) - 1; 
      const randomBytes = crypto.randomBytes(Math.ceil(option.length / 2));
      const randomValue = parseInt(randomBytes.toString('hex'), 16) % max; // Converting the random bytes to a number within the desired range
      result = randomValue.toString();
      result = checkOptions(result, option);
    } else if (option.charset === 'binary') {
      result = compute(binary, 2, option.length);
    } else if (option.charset === 'octal') {
      result = compute(octal, 8, option.length);
    } else if (option.charset === 'hex') {
      const charactersLength = hex.length;
      result = compute(hex, charactersLength, option.length);
      result = checkOptions(result, option);
    } else if (option.charset === 'alphabet') {
      const charactersLength = alphabet.length;
      result = compute(alphabet, charactersLength, option.length);
      result = checkOptions(result, option);
    } else {
      const charactersLength = alphanumeric.length;
      result = compute(alphanumeric, charactersLength, option.length);
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
    const randomBytes = crypto.randomBytes(1);
    const randomIndex = Math.floor(randomBytes[0] / 256 * charactersLength);
    result += emojis[randomIndex].trim();
  }
  return result;
};
