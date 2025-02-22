/**
 * Determines if a value is a non-class function.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a function (excluding classes), otherwise `false`.
 */
function isFunction<Args extends unknown[] = unknown[], R = unknown>(
	value: unknown,
): value is (...args: Args) => R {
	return typeof value === "function" && !/^class\s/.test(value.toString());
}

export { isFunction };
