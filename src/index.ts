import { options } from "./types";

/**
 * 
 * @param option 
 * @returns 
 */
export const randomString = (option:number|options) => {
    let result = '';
    if(typeof option==='number'){
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < option; i += 1) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }     
    }
    else if(typeof option==='object'){
        if(option.char){
    const characters=option.char  
    const charactersLength = characters.toString().length
    for (let i = 0; i < option.length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
        }
    else if(option.charset==="number"){
       
    }        
    }   
    return result;
};