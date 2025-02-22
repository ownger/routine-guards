/**
 * Determines if a key exists in the given object.
 *
 * @param obj - The object to check.
 * @param key - The key to verify.
 * @returns `true` if the key exists in the object, otherwise `false`.
 */
function isKeyOf<T extends object>(obj: T, key: unknown): key is keyof T {
	if (
		typeof key !== "string" &&
		typeof key !== "number" &&
		typeof key !== "symbol"
	) {
		return false;
	}

	return typeof obj === "object" && obj !== null && key in obj;
}

export { isKeyOf };
