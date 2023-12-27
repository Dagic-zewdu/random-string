const randomString = require('./lib/index');

describe('testing using provide length', () => {
  test('the string should return alphanumeric values', () => {
    let random = randomString.generate(9);
    expect(random.match(/^[a-zA-Z0-9]+$/)).toBeTruthy();
  });
  test('length should be 16', () => {
    let random = randomString.generate();
    expect(random.length === 16).toBeTruthy();
  });
});

describe('testing with given options', () => {
  test('should generate with the given charset', () => {
    let random = randomString.generate({ range: '2846', length: 6 });
    expect(random.match(/[^2846]/)).toBeFalsy();
  });
  test('should generate with the given charset', () => {
    let random = randomString.generate({ range: 'abcdef', length: 10 });
    expect(random.match(/[a-f]/)).toBeTruthy();
  });
  test('should be a number only', () => {
    let random = randomString.generate({ charset: 'number', length: 6 });
    expect(random.match(/^[0-9]+$/)).toBeTruthy();
  });
  test('should be an alphabet only', () => {
    let random = randomString.generate({ charset: 'alphabet', length: 6 });
    expect(random.match(/^[a-zA-Z]+$/)).toBeTruthy();
  });
  test('should be Binary only', () => {
    let random = randomString.generate({ charset: 'binary', length: 6 });
    expect(random.match(/[0-1]+$/)).toBeTruthy();
  });
  test('should be octal only', () => {
    let random = randomString.generate({ charset: 'octal', length: 6 });
    expect(random.match(/[0-7]+$/)).toBeTruthy();
  });
  test('should be hexa only', () => {
    let random = randomString.generate({ charset: 'hex', length: 6 });
    expect(random.match(/[0-9a-fA-F]+$/)).toBeTruthy();
  });
  test('should be alphabet with small Letters  only', () => {
    let random = randomString.generate({
      charset: 'alphabet',
      length: 6,
      lowerCaseOnly: true,
    });
    expect(random.match(/[0-9a-z]+$/)).toBeTruthy();
  });
  test('should be alphabet with capital Letters  only', () => {
    let random = randomString.generate({
      charset: 'alphabet',
      length: 6,
      upperCaseOnly: true,
    });
    expect(random.match(/[0-9A-Z]+$/)).toBeTruthy();
  });

  test('should be symbols with number  only', () => {
    let random = randomString.generate({
      insertSymbol: true,
      charset: 'number',
    });
    console.log('Symbol and number : ' + random);
    expect(
      random.match(/[-!$%^&*()_+|~=`{}\[\]:";<>?,.\/+0-9]+$/)
    ).toBeTruthy();
  });
  test('should be symbols with alphanumeric small letters  only', () => {
    let random = randomString.generate({
      insertSymbol: true,
      lowerCaseOnly: true,
    });
    console.log(random);
    expect(
      random.match(/[-!$%^&*()_+|~=`{}\[\]:";<>?,.\/0-9a-z]+$/)
    ).toBeTruthy();
  });
  test('should be symbols with alphanumeric capital letters  only', () => {
    let random = randomString.generate({
      insertSymbol: true,
      upperCaseOnly: true,
      length: 5,
    });
    expect(
      random.match(/[-!$%^&*()_+|~=`{}\[\]:";<>?,.\/0-9A-Z]/)
    ).toBeTruthy();
  });
  test('should be symbols with given provided number', () => {
    let random = randomString.generate({
      insertSymbol: true,
      range: '123abc',
      length: 6,
    });
    expect(
      random.match(/[-!$%^&*()_+|~=`{}\[\]:";<>?,.\/1-3a-c]/)
    ).toBeTruthy();
  });
});
