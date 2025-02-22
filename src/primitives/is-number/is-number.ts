/**
 * Check if the value is a number and not NaN.
 *
 * @param value {unknown} - The value to check.
 * @returns boolean - The result of the check.
 */
function isNumber(value: unknown): value is number {
	return typeof value === "number" && !Number.isNaN(value);
}

export { isNumber };
