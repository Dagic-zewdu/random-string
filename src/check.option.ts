import { hex,symbols, options, alphabet, alphanumeric, number } from "./types";

export const checkOptions=(result:string,option:options)=>{
    let newResult=result
    if(option.insertSymbol){
        const characters= option.charset==="number"?(number+symbols):
        option.charset==="alphabet"?(alphabet+symbols): 
        (alphanumeric+symbols);
        const charactersLength = characters.length;
        for (let i = 0; i < option.length; i += 1) {
          newResult += characters.charAt(Math.floor(Math.random() * charactersLength));
        }  
    }
    if(option.disableCapitalLetters){
       newResult=result.toLowerCase()
    }
    else if(option.disableSmallLetters){
    newResult=result.toUpperCase()
    }
     return newResult
}