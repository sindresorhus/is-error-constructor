import assert from 'assert';
import test from 'ava';
import m from './';

class CustomError extends RangeError {
	constructor() {
		super();
		this.name = 'CustomError';
	}
}

test(t => {
	t.true(m(Error));
	t.true(m(RangeError));
	t.true(m(SyntaxError));
	t.true(m(assert.AssertionError));
	t.true(m(CustomError));
	t.false(m(() => {}));
	t.false(m({}));
	t.false(m(''));
	t.false(m(new Error()));
	t.false(m(new assert.AssertionError({
		actual: '',
		expected: '',
		operator: ''
	})));
	t.false(m(new CustomError()));
});
