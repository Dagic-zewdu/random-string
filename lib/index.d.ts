import { options } from "./types";
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
export declare const generate: (option: number | options) => string;
