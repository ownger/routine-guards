import { isBoolean } from "@/primitives";

describe("isBoolean", () => {
	it.each([
		{ value: true, expected: true },
		{ value: false, expected: true },
		{ value: 1, expected: false },
		{ value: "true", expected: false },
		{ value: undefined, expected: false },
		{ value: null, expected: false },
		{ value: {}, expected: false },
		{ value: [], expected: false },
		{ value: () => {}, expected: false },
	])("should return $expected when $value is passed", ({ value, expected }) => {
		const result = isBoolean(value);
		expect(result).toBe(expected);
	});
});
