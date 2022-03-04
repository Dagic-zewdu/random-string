const randomString =require('./lib/index')

describe('testing using provide length', () => {
    test('the string generated should have a length of 5', () => {
       let len=randomString.generate({charset:'number',length:5})
      expect(len.length).toBe(5)
    });
    test('the string should return alphanumeric values',()=>{
        let random=randomString.generate(9)
        expect(random.match(/^[a-zA-Z0-9]+$/)).toBeTruthy()
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
})