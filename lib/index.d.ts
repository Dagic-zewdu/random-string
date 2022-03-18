import { options } from './types';
/**
 * @param option- could be number which is the length of the string to be generated || could be option {
 * @returns- random string generated
 */
export declare const generate: (option: number | options) => string;
export declare const generateUnicodeEmoji: (length: number) => string;
