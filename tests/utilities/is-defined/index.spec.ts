import { isDefined } from "@/utilities";

describe("isDefined", () => {
	it.each([
		[undefined, false],
		[null, false],
		[0, true],
		[1, true],
		["", true],
		["string", true],
		[{}, true],
		[{ a: 1 }, true],
		[[], true],
		[[1], true],
		[true, true],
		[false, true],
	])("Should return %p when called with %p", (value, expected) => {
		expect(isDefined(value)).toBe(expected);
	});
});
