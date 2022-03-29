const randomString =require('./lib/index')


let str=randomString.generate({
length:10,
range:"feven",
insertSymbol:true,
upperCaseOnly:true
})

console.log(str) 
