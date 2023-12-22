import { checkOptions } from './check.option';
import { emojis } from './emoji';
import { alphabet, alphanumeric, binary, octal, hex, options } from './types';
import crypto from 'crypto';

/**
 * @param option - could be a number which is the length of the string to be generated || could be an option {
 * @returns - random string generated
 */
export const generate = (option: number | options): string => {
  
  const compute = (type: string, optlen: number, length: number) => {
    let computedResult = '';
    const charactersLength = type.length;
    for (let i = 0; i < length; i += 1) {
      const randomBytes = crypto.randomBytes(1);
      const randomIndex = Math.floor(randomBytes[0] / 256 * charactersLength);
      computedResult += type.charAt(randomIndex);
    }
    return computedResult;
  }

  let result = '';
  if (typeof option === 'number' || !option) {
    let opt = option ? option : 16;
    const characters = alphanumeric;
    const charactersLength = characters.length;
    result = compute(characters, charactersLength, opt);
  } else if (typeof option === 'object') {
    
    const { length = 16, range: characters, charset } = option;
    
    if (characters) {
      const charactersLength = characters.toString().length;
      result = compute(characters, charactersLength, length);
      result = checkOptions(result, option);
    }

    switch(charset) {
      case 'number':
        const max = Math.pow(10, length) - 1; 
        const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
        const randomValue = parseInt(randomBytes.toString('hex'), 16) % max; // Converting the random bytes to a number within the desired range
        result = randomValue.toString();
        result = checkOptions(result, option);
        break;
      case 'binary':
        result = compute(binary, 2, length);
        break;
      case 'octal':
        result = compute(octal, 8, length);
        break;
      case 'hex':
        result = compute(hex, hex.length, length);
        result = checkOptions(result, option);
        break;
      case 'alphabet':
        result = compute(alphabet, alphabet.length, length);
        result = checkOptions(result, option);
        break;
      default:
        result = compute(alphanumeric, alphanumeric.length, length);
        result = checkOptions(result, option);
    }
  }

  return result;
};

export const generateUnicodeEmoji = (length: number = 16) => {
  let result = '';
  const charactersLength = emojis.length;
  for (let i = 0; i < length; i += 1) {
    const randomBytes = crypto.randomBytes(1);
    const randomIndex = Math.floor(randomBytes[0] / 256 * charactersLength);
    result += emojis[randomIndex].trim();
  }
  return result;
};
