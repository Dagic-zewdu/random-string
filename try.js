const randomString =require('./lib/index')

let str=randomString.generate({ 
    range:'abc',
    insertSymbol:true
}) 
let emoji=randomString.generateUnicodeEmoji(3) 
 
console.log(str) 
console.log(emoji)