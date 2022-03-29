const randomString =require('./lib/index')


let str=randomString.generate({
length:10,
charset:"aplhabet",
insertSymbol:true,
upperCaseOnly:true
})

console.log(str) 
