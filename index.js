'use strict';

const isErrorConstructor = constructor =>
	constructor === Error || constructor.prototype instanceof Error;

module.exports = isErrorConstructor;
// TODO: Remove this for the next major release
module.exports.default = isErrorConstructor;
