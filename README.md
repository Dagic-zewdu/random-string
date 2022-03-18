## About The Package

There are lots of scenarios which one can use our Random string generator the most known or the best scenario is for password genertion and Token generation.
There are many Random Genertor available on GitHub; however, We didn't find one that really suited our needs a a devloper.

Here's why:
* This Random string Genrator has many more different features from the others one can use. 
* Executionn time  <b>( it is much faster) </b>
* More Security
## Getting Started

To start to use this on local machine build then first Test the program using the test.js  

Install node modules 
* npm
  ```sh
  npm install random-string
  ```
* yarn 

```
yarn add random-string

```

## Usage

For generating a random string you call `generate()` function.By default it generate 16 character string.
``` js
const randomString = require("random-string");
randomString.generate(); // xabgtl3yb1Ac0MrQ

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
randomstring.generate({
charset:'number',
length:10
}) //2342612198

randomstring.generate({
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

## API
randomString

`generate(option)`

 * options:

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

    - disableCapitalLetters : Only Small Leters are used to generate the output [Optional]


<!-- ROADMAP -->
## Tests
- npm install 
- npm run test
## Roadmap
- [x] Generate alphanumeric, numbers , Alphabet, Octal, Hex, Binary 
- [x] Generate Symbols
- [ ] Generate with Advanced Symbols
- [ ] Generate Numbers with Symbols


See the [open issues](https://github.com/Dagic-zewdu/random-string/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation


<!-- 1. Get a free API Key at [https://example.com](https://example.com) -->
1. Clone the repo
   ```sh
   git clone https://github.com/Dagic-zewdu/random-string.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
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
## Contributing

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

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS
## Acknowledgments -->


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.typescriptlang.org/ -->
