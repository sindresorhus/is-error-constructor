'use strict';

const isErrorConstructor = constructor =>
	constructor === Error || constructor.prototype instanceof Error;

module.exports = isErrorConstructor;
module.exports.default = isErrorConstructor;
