import { isFunction } from "@/utilities";

describe("isFunction", () => {
	it.each([
		{ value: () => {}, expected: true },
		{ value: 1, expected: false },
		{ value: "string", expected: false },
		{ value: true, expected: false },
		{ value: {}, expected: false },
		{ value: [], expected: false },
		{ value: null, expected: false },
		{ value: undefined, expected: false },
		{ value: Symbol(), expected: false },
		{ value: new Date(), expected: false },
		{ value: /./, expected: false },
		{ value: new Error(), expected: false },
		{ value: new Map(), expected: false },
		{ value: new Set(), expected: false },
		{ value: new WeakMap(), expected: false },
		{ value: new WeakSet(), expected: false },
		{ value: class Foo {}, expected: false },
		{ value: new ArrayBuffer(2), expected: false },
		{ value: new Function(), expected: true },
	])("Should return $expected for $value", ({ value, expected }) => {
		const result = isFunction(value);
		expect(result).toBe(expected);
	});
});
