const randomString =require('./lib/index')

describe('testing using provide length', () => {
    test('the string should return alphanumeric values',()=>{
        let random=randomString.generate(9)
        expect(random.match(/^[a-zA-Z0-9]+$/)).toBeTruthy()
    })
    test('length should be 16',()=>{
        let random=randomString.generate()
        expect(random.length===16).toBeTruthy()
        })
});

describe('testing with given options',()=>{
    test('should generate with the given charset',()=>{
        let random=randomString.generate({char:'2846',length:6})
        
        expect(random.match(random,"^\d*[02468]$")).toBeTruthy()
    })
    test('should generate with the given charset',()=>{
        let random=randomString.generate({char:'abcdef',length:10})
        expect(random.match(random,/ˆ[a-f]/)).toBeTruthy()
        
    })
    test('should be a number only',()=>{
        let random=randomString.generate({charset:'number',length:6})
        expect(random.match(/^[0-9]+$/)).toBeTruthy()

    })
    test('should be an alphabet only',()=>{
        let random=randomString.generate({charset:'alphabet',length:6})
        expect(random.match(/^[a-zA-Z]+$/)).toBeTruthy()
    })
    test('should be Binary only',()=>{
        let random=randomString.generate({charset:'binary',length:6})
        expect(random.match(/[0-1]+$/)).toBeTruthy()
    })
    test('should be octal only',()=>{
        let random=randomString.generate({charset:'octal',length:6})
        expect(random.match(/[0-7]+$/)).toBeTruthy()
    })
    test('should be hexa only',()=>{
        let random=randomString.generate({charset:'hex',length:6})
        expect(random.match(/[0-9a-fA-F]+$/)).toBeTruthy()
    })
    test('should be hexa with small Letters  only',()=>{
        let random=randomString.generate({charset:'hex',length:6,disableCapitalLetters:true})
        expect(random.match(/[0-9a-f]+$/)).toBeTruthy()
    })
    test('should be hexa with capital Letters  only',()=>{
        let random=randomString.generate({charset:'hex',length:6,disableSmallLetters:true})
        expect(random.match(/[0-9A-F]+$/)).toBeTruthy()
    })
    test('should be symbols with alphanumeric Letters  only',()=>{
        let random=randomString.generate({length:8,insertSymbol:true})
        expect(random.match(/[-!$%^&*()_+|~=`{}\[\]:";<>?,.\/0-9a-zA-Z]+$/)).toBeTruthy()
    })
    test('should be symbols with number  only',()=>{
        let random=randomString.generate({insertSymbol:true,charset:"number"})
        console.log("Symbol and number : "+random);
        expect(random.match(/[-!$%^&*()_+|~=`{}\[\]:";<>?,.\/+0-9]+$/)).toBeTruthy()
    })
    test('should be symbols with alphanumeric small letters  only',()=>{
        let random=randomString.generate({insertSymbol:true,disableCapitalLetters:true})
        console.log("Symbol Alhanumeric : "+random);
        expect(random.match(/[-!$%^&*()_+|~=`{}\[\]:";<>?,.\/0-9a-z]+$/)).toBeTruthy()
    })
    test('should be symbols with alphanumeric capital letters  only',()=>{
        let random=randomString.generate({insertSymbol:true,disableCapitalLetters:true})
        expect(random.match(/[-!$%^&*()_+|~=`{}\[\]:";<>?,.\/]|[0-9a-z]+$/)).toBeTruthy()

    })
})