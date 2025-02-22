import { isNull } from "@/utilities";

describe("isNull", () => {
	it.each([
		[null, true],
		[undefined, false],
		[0, false],
		[false, false],
		["", false],
		[{}, false],
		[[], false],
	])("Should return %p when given %p", (value, expected) => {
		expect(isNull(value)).toBe(expected);
	});
});
