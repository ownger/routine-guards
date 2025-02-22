import { isString } from "@/primitives";

describe("isString", () => {
	it.each([
		{ value: 1, expected: false },
		{ value: 1.1, expected: false },
		{ value: 0, expected: false },
		{ value: -1, expected: false },
		{ value: -1.1, expected: false },
		{ value: Number.NaN, expected: false },
		{ value: Number.POSITIVE_INFINITY, expected: false },
		{ value: Number.NEGATIVE_INFINITY, expected: false },
		{ value: "1", expected: true },
		{ value: "1.1", expected: true },
		{ value: "0", expected: true },
		{ value: "-1", expected: true },
		{ value: "-1.1", expected: true },
		{ value: "NaN", expected: true },
		{ value: "Infinity", expected: true },
		{ value: "-Infinity", expected: true },
		{ value: true, expected: false },
		{ value: false, expected: false },
		{ value: null, expected: false },
		{ value: undefined, expected: false },
		{ value: {}, expected: false },
		{ value: [], expected: false },
		{ value: () => {}, expected: false },
	])("should return $expected for $value", ({ value, expected }) => {
		expect(isString(value)).toBe(expected);
	});
});
