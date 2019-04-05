import {expectType} from 'tsd';
import isErrorConstructor = require('.');

const foo = 'foo';

if (isErrorConstructor(foo)) {
	expectType<ErrorConstructor>(foo);
}
