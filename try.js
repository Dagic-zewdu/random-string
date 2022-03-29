const randomString =require('./lib/index')


let str=randomString.generate({
    charset:"alpabet", 
    insertSymbol:true, 
    length:4
})
let emoji=randomString.generateUnicodeEmoji(1) 
 
console.log("4 must be ",str) 
console.log(emoji)
