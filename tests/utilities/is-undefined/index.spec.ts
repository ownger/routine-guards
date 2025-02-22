import { isUndefined } from "@/utilities";

describe("isUndefined", () => {
	it.each([
		[null, false],
		[undefined, true],
		[0, false],
		[false, false],
		["", false],
		[{}, false],
		[[], false],
	])("Should return %p when given %p", (value, expected) => {
		expect(isUndefined(value)).toBe(expected);
	});
});
