'use strict';
module.exports = ctor => (ctor === Error || ctor.prototype instanceof Error);
