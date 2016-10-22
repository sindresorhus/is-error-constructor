'use strict';
module.exports = ctor => {
	let proto = ctor.prototype;

	while (proto) {
		if (proto === Error.prototype) {
			return true;
		}

		proto = Object.getPrototypeOf(proto);
	}

	return false;
};
