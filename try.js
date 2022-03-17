const randomString =require('./lib/index')

let str=randomString.generate({
    range:'abc',
    insertSymbol:true
})
let emoji=randomString.generateUnicodeEmoji(1)

console.log(str)
console.log(emoji)