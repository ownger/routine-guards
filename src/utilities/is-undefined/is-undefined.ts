/**
 * Determines if a value is `undefined`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is `undefined`, otherwise `false`.
 */
function isUndefined(value: unknown): value is undefined {
	return typeof value === "undefined";
}

export { isUndefined };
