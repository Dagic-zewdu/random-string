 export let getCryptoRandomInt = (max:any) => {      
    const getRandomValues = require('get-random-values'), 
    array = new Uint8Array(1);
    let min=0; 
    var byteArray = new Uint8Array(1);
    getRandomValues(byteArray);
    let randomNum = Number('0.' + byteArray[0].toString());
    randomNum = Math.floor(Number(randomNum) * (max - min + 1)) + min;
    return randomNum;
}

