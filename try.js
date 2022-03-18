const randomString =require('./lib/index')

let str=randomString.generate({
charset:'alphabet',
length:10
})
let emoji=randomString.generateUnicodeEmoji(1) 
 
console.log(str) 
console.log(emoji)
