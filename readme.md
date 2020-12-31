# is-error-constructor

> Check if a value is an error constructor


## Install

```
$ npm install is-error-constructor
```


## Usage

```js
const isErrorConstructor = require('is-error-constructor');

isErrorConstructor(Error);
//=> true

isErrorConstructor(RangeError);
//=> true

function FakeError() {}
isErrorConstructor(FakeError);
//=> false

class UnicornError extends Error {}
isErrorConstructor(UnicornError);
//=> true
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
