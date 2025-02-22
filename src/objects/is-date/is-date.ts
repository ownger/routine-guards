/**
 * Determines if a value is a valid `Date` object.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a valid `Date` object, otherwise `false`.
 */
function isDate(value: unknown): value is Date {
	return (
		typeof value === "object" &&
		value !== null &&
		value instanceof Date &&
		!Number.isNaN(value.getTime())
	);
}

export { isDate };
