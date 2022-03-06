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
      let opt=option?option:8
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < opt; i += 1) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }     
    }
    else if(typeof option==='object'){
        if(!option.length){
          option['length']=8
        }
        if(option.char){ //sdfd
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
        const characters =option.charset==='alphabet'?'abcdefghijklmnopqrstuvwxyz':'abcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length;
        for (let i = 0; i < option.length; i += 1) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        } 
    }
    else if(option.charset==='binary')
    {
      for(let i = 0; i < option.length; ++i) {
      result += Math.floor(Math.random() * 2);
      }
    }
    else if(option.charset==='octal')
    {
      for(let i = 0; i < option.length; ++i) {
      result+= Math.floor(Math.random() * 8);
      }
    } 
    else if(option.charset==='hex')
    {
      const characters = '0123456789ABCDEFabcdef';
        const charactersLength = characters.length;
        for (let i = 0; i < option.length; i += 1) {
          result+=characters.charAt(Math.floor(Math.random() * charactersLength));
        }
      
    }
    else if (option.charset==='alphabet')
    {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
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