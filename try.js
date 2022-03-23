const randomString =require('./lib/index')


let str=randomString.generate({
length:10,
prefix: "pre-"
})
let emoji=randomString.generateUnicodeEmoji(1) 
 
console.log(str) 
console.log(emoji)
