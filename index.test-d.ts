import {expectType} from 'tsd-check';
import isErrorConstructor from '.';

const foo = 'foo';

if (isErrorConstructor(foo)) {
	expectType<ErrorConstructor>(foo);
}
