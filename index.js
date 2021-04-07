export default function isErrorConstructor(value) {
	return value === Error || Boolean(value && value.prototype instanceof Error);
}
