# ponyfill-array-findIndex 
[![Build Status](https://travis-ci.org/cmilhench/ponyfill-array-findIndex.svg?branch=master)](https://travis-ci.org/cmilhench/ponyfill-array-findIndex)

> ES6 [`Array.findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) ponyfill

> Ponyfill: A polyfill that doesn't overwrite the native method


## Install

```
$ npm install ponyfill-array-findindex --save
```


## Usage

```js
var findIndex = require('ponyfill-array-findindex');
[4, 6, 7, 12].findIndex(isPrime);
//=> 2
```


## License

MIT © [Colin Milhench](http://milhen.ch)
