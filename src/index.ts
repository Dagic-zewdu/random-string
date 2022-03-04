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
export const generate = (option:number|options) => {
    let result:string|number=''
    if(typeof option==='number'){
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < option; i += 1) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }     
    }
    else if(typeof option==='object'){
        if(!option.length){
          throw new Error('length is not defined')
        }
        if(option.char){
    const characters=option.char  
    const charactersLength = characters.toString().length
    for (let i = 0; i < option.length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
        }
    else if(option.charset==="number"){
       result= Math.round(Math.random()*Math.pow(10,option.length)).toString()
    }
    else if(option.disableCapitalLetters){
        const characters =option.disableNumbers?'abcdefghijklmnopqrstuvwxyz':'abcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length;
        for (let i = 0; i < option.length; i += 1) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        } 
    }
    else if(option.disableSmallLetters){
        const characters =option.disableNumbers?'ABCDEFGHIJKLMNOPQRSTUVWXYZ':'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        const charactersLength = characters.length;
        for (let i = 0; i < option.length; i += 1) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }
    else {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < option.length; i += 1) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }   
    }        
    }   
    return result;
};