import { hex,symbols, options, alphabet, alphanumeric, number } from "./types";

export const checkOptions=(result:string,option:options)=>{
    let newResult=result
    if(option.insertSymbol){
        const characters= option.range?(symbols+option.range+symbols):
        option.charset==="number"?(symbols+number+symbols):
        option.charset==="alphabet"?(symbols+alphabet+symbols): 
        (symbols+alphanumeric+symbols);
        const charactersLength = characters.length;
        for (let i = 0; i < option.length; i += 1) {
          newResult += characters.charAt(Math.floor(Math.random() * charactersLength));
        }  
    }
    if(option.lowerCaseOnly){
       newResult=result.toLowerCase()
    }
    if(option.upperCaseOnly){
    newResult=result.toUpperCase()
    }
     return newResult
}