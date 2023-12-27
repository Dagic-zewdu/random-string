/**
 *
 */
export type options = {
  charset?: 'alphanumeric' | 'number' | 'alphabet' | 'hex' | 'binary' | 'octal';
  lowerCaseOnly?: boolean; //disable capital letter
  range?: string; // 13rea
  length: number;
  upperCaseOnly?: boolean;
  insertSymbol?: boolean;
  symbolsOnly?: boolean;
  prefix?: string;
  suffix?: string;
};

export const hex = '0123456789ABCDEFabcdef';
export const symbols = '[-!$%^&*()_+|~=`{}[]:";<>?,./]' + "'";
export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
export const alphanumeric =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const number = '0123456789';
export const alphabetSymbol =
  'IJ[A-B!C$Dh%E^FGH&KfgL*f(zMNy)Q_iOfPe+xdRc|zb~S=aTw`{Y}X[]Z\vrW:j";k<ls>t?mVn,o.up/]Uq' +
  "'";
export const numberSymbol = '[-!$%9^&*()_8+|~6=7`5{4}[]3:"2;<>?0,.1/]' + "'";
export const alphabetNumericSymbol =
  'IJ[0A-B!1C$3Dh%E^2FGH&4Kf5gL*6f(zMN7y)Q_iOfPe+xdRc|zb~S=aTw`{Y}X[]Z\vrW:j";k<ls8>t?9mVn,o.u7p/]Uq' +
  "'";
export const binary = '01';
export const octal = '01234567';
