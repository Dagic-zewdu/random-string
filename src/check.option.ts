import {
  hex,
  symbols,
  options,
  alphabet,
  alphanumeric,
  number,
  alphabetSymbol,
  numberSymbol,
  alphabetNumericSymbol,
} from './types';

export const checkOptions = (result: string, option: options) => {
  let newResult = result;
  if (option.insertSymbol) {
    newResult = '';
    const characters = option.range
      ? option.range + symbols + option.range
      : option.charset === 'number'
      ? numberSymbol
      : option.charset === 'alphabet'
      ? alphabetSymbol
      : alphabetNumericSymbol;
    const charactersLength = characters.length;
    for (let i = 0; i < option.length; i++) {
      newResult += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
  }
  if (option.symbolsOnly) {
    newResult = '';
    const charactersLength = symbols.length;
    for (let i = 0; i < option.length; i += 1) {
      newResult += symbols.charAt(Math.floor(Math.random() * charactersLength));
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
