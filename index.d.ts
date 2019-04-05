declare const isErrorConstructor: {
	/**
	Check if a value is an error constructor.

	@example
	```
	import isErrorConstructor = require('is-error-constructor');

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
	(value: unknown): value is ErrorConstructor;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function isErrorConstructor(value: unknown): value is ErrorConstructor;
	// export = isErrorConstructor;
	default: typeof isErrorConstructor;
};

export = isErrorConstructor;
