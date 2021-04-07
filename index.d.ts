/**
Check if a value is an error constructor.

@example
```
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
*/
export default function isErrorConstructor(value: unknown): value is ErrorConstructor;
