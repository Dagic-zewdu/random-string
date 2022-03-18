const randomString =require('./lib/index')

let str=randomString.generate({
     symbolsOnly:true,
     length:10
})
let emoji=randomString.generateUnicodeEmoji(1)

console.log(str)