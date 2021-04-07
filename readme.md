# is-error-constructor

> Check if a value is an error constructor

## Install

```
$ npm install is-error-constructor
```

## Usage

```js
import isErrorConstructor from 'is-error-constructor';

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

## Related

- [is](https://github.com/sindresorhus/is) - Type check values
