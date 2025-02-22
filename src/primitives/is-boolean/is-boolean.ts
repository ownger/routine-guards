/**
 * Check if the value is a boolean.
 *
 * @param value {unknown} - The value to check.
 * @returns boolean - The result of the check.
 */
function isBoolean(value: unknown): value is boolean {
	return typeof value === "boolean";
}

export { isBoolean };
