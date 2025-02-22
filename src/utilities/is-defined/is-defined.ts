/**
 * Determines if a value is neither `null` nor `undefined`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is defined (not `null` or `undefined`), otherwise `false`.
 */
function isDefined<Type>(value: Type): value is NonNullable<Type> {
	return value !== undefined && value !== null;
}

export { isDefined };
