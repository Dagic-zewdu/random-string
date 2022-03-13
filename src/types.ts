/**
 * 
 */
export type options={
   charset?:"alphanumeric"|"number"|"alphabet"|"hex"|"binary"|"octal",
   lowerCaseOnly?:boolean, //disable capital letter
   range?:string, // 13rea
   length: number,
   upperCaseOnly?:boolean, 
   insertSymbol?:boolean,   
}

export const hex="0123456789ABCDEFabcdef"
export const symbols='[-!$%^&*()_+|~=`{}\[\]:";<>?,.\/]'+"'"
export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
export const alphanumeric='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
export const number='0123456789'