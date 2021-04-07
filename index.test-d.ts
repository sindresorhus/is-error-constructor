import {expectAssignable} from 'tsd';
import isErrorConstructor from './index.js';

const foo = 'foo';

if (isErrorConstructor(foo)) {
	expectAssignable<ErrorConstructor>(foo);
}
