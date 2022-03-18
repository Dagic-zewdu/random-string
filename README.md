## About The Package

There are lots of scenarios which one can use our Random string generator the most known or the best scenario is for

   1.Password genertion 
   
   2.Token generation.
   
   3.Testing
   
   4.id generation
   
This package generate random string based on the given parameters.

## Getting Started

To start to use this on local machine build then first Test the program using the test.js  

Install node modules

* npm
 
```
npm install random_string
```
* yarn 

```
yarn add random_string

```

## Usage

For generating a random string you call `generate()` function.By default it generate 16 character string.
``` js
const randomString = require("random_string");
randomString.generate(); // xabgtl3yb1Ac0MrQ

```
or you can use  `import` statment
```js
import randomString from 'random_string'
```
If you want some length to random string pass a number to the function.

```js
 randomString.generate(6); // lAo3Bi
```

To be more specific you can pass an object for more flexibility.This are the listed options you can provide

``` ts
type options={
   charset?:"alphanumeric"|"number"|"alphabet"|"hex"|"binary"|"octal",
   lowerCaseOnly?:boolean, //only lowercase letter
   range?:string, // user provided charset
   length: number, //length of the character if not provided
   upperCaseOnly?:boolean, // only lowercase 
   insertSymbol?:boolean, // only uppercase
   symbolsOnly:boolean   //only symbols
}
```
passing down the options.Generate string only in the given string range

```js
randomeString.generate({
  range:'abc123',
  length:6
 });

// a3cb21
```
You can set also set type of string
```js
randomString.generate({
charset:'number',
length:10
}) //2342612198

randomString.generate({
charset:'alphabet',
length:10
}) //SoWhopDFTb

randomString.generate({
charset:'hex', 
length:6
})// C0faDB
```
You can also insert symbols if you pass set the `insertSymbol` option to true. But it doesn't work for binary or octal or hex charset option. 
``` js
randomString.generate({
insertSymbol:true
})
//bd@MK8ˆIvpGVoorO{FJkf]iMz,{1+-8g
```
You can pass the option `upperCaseOnly` to make the string only capital and `lowerCaseOnly` to make the string lowercase

```js
randomString.generate({
  charset:'alphabet',
  upperCaseOnly:true
 }) 
 //ODEISDGQXUGGOHHG
randomString.generate({
  lowerCaseOnly:true
 })
  //fnzkamf0svos4yso
```
You can get symbols only if you set option ` symbolsOnly:true,`
```js
randomString.generate({
     symbolsOnly:true,
     length:10
})
 // ?[]}$'&,{]
```
For fun you can also generate random emojis using `generateUnicodeEmoji(length)`

```js
randomString.generateUnicodeEmoji(1) //🍍
```
## API

randomString

`generate(option|length)`

 * option:

  * length: define the length of the output default 16   [Optional]

  * insert Symbol: to use Symbols when generatig random string output  [Optional]

  * charset:

    - Alphabetic [a-zA-Z]

    - alphanumeric[0-9a-zAZ]

    - numeric [0-9]

    - Binary [01]

    - Octal [0-7]

    - Hexa [0-9a-fA-F]

  * capitalization:

    - upperCaseOnly : Only Capital Leters are used to generate the output [Optional]

    - lowerCaseOnly : Only Small Leters are used to generate the output [Optional]

  * symbols only:

    - used to generate symbols only

`generateUnicodeEmoji(length)`
   - generates random emojis
<!-- ROADMAP -->
## Tests
- npm install 
- npm run test


See the [open issues](https://github.com/Dagic-zewdu/random-string/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

## Authors

### Author 1

👤 **Dagmawi Zewdu**

 - GitHub: [@Dagic-zewdu](https://github.com/Dagic-zewdu)
- LinkedIn: [Dagi-Zewdu](https://www.linkedin.com/in/dagi-zewdu-21b835215)

### Author 2

👤 **Sentayhu Berhanu**

- GitHub: [@sentayhu19](https://github.com/sentayhu19)
- LinkedIn: [sentayhu-berhanu](https://www.linkedin.com/in/sentayhu-berhanu-6376579a/)

<!-- CONTRIBUTING -->
## Contribution

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [TypeScript](https://www.typescriptlang.org/)
* [JavaScript](https://www.javascript.com/)

<!-- LICENSE
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- CONTACT -->
## Contact

Dagmawi Zewdu -   [@Dagi](https://twitter.com/dagmawi-zewdu) - dagmawizewdu@gmail.com
 
Sentayhu Berhanu- [@Sentayhu](https://twitter.com/VoltageBerhanu) - sentayhuberhanu19@gmail.com

Project Link: [https://github.com/Dagic-zewdu/random-string](https://github.com/Dagic-zewdu/random-string)
