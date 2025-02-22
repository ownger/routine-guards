/**
 * Check if the value is a string.
 *
 * @param value {unknown} - The value to check.
 * @returns boolean - The result of the check.
 */
function isString(value: unknown): value is string {
	return typeof value === "string";
}

export { isString };
