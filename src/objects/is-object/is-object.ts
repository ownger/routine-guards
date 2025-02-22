/**
 * Determines if a value is a non-null object (excluding arrays).
 *
 * @param value - The value to check.
 * @returns `true` if the value is an object, otherwise `false`.
 */
function isObject(
	value: unknown,
): value is Record<string | symbol | number, unknown> {
	return (
		typeof value === "object" &&
		value !== null &&
		!Array.isArray(value) &&
		Object.prototype.toString.call(value) === "[object Object]"
	);
}
export { isObject };
