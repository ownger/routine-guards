import { isNumber } from "@/primitives";

describe("isNumber", () => {
	it.each([
		{ value: 1, expected: true },
		{ value: 1.1, expected: true },
		{ value: 0, expected: true },
		{ value: -1, expected: true },
		{ value: -1.1, expected: true },
		{ value: Number.NaN, expected: false },
		{ value: Number.POSITIVE_INFINITY, expected: true },
		{ value: Number.NEGATIVE_INFINITY, expected: true },
		{ value: "1", expected: false },
		{ value: "1.1", expected: false },
		{ value: "0", expected: false },
		{ value: "-1", expected: false },
		{ value: "-1.1", expected: false },
		{ value: "NaN", expected: false },
		{ value: "Infinity", expected: false },
		{ value: "-Infinity", expected: false },
		{ value: true, expected: false },
		{ value: false, expected: false },
		{ value: null, expected: false },
		{ value: undefined, expected: false },
		{ value: {}, expected: false },
		{ value: [], expected: false },
		{ value: () => {}, expected: false },
	])("should return $expected for $value", ({ value, expected }) => {
		expect(isNumber(value)).toBe(expected);
	});
});
