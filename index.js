'use strict';
module.exports = ctor => {
	return ctor === Error || ctor.prototype instanceof Error;
};
