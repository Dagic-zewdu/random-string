var crypto = require('crypto') 
 export let getCryptoRandomInt = (max:number) => {      
     let min=0; 
    var array = crypto.randomBytes(1).toJSON().data
     let randomNum = Number( '0.' + array[0]);
     randomNum = Math.floor(randomNum * (max - min + 1)) + min;
    return randomNum;
}

