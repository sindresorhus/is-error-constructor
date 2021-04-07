import assert from 'assert';
import test from 'ava';
import isErrorConstructor from './index.js';

class CustomError extends RangeError {
	constructor() {
		super();
		this.name = 'CustomError';
	}
}

test('main', t => {
	t.true(isErrorConstructor(Error));
	t.true(isErrorConstructor(RangeError));
	t.true(isErrorConstructor(SyntaxError));
	t.true(isErrorConstructor(assert.AssertionError));
	t.true(isErrorConstructor(CustomError));
	t.false(isErrorConstructor(() => {}));
	t.false(isErrorConstructor({}));
	t.false(isErrorConstructor(''));
	t.false(isErrorConstructor(new Error())); // eslint-disable-line unicorn/error-message
	t.false(isErrorConstructor(new assert.AssertionError({
		actual: '',
		expected: '',
		operator: ''
	})));
	t.false(isErrorConstructor(new CustomError()));
});
