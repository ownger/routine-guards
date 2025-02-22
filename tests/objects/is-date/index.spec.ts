import { isDate } from "@/objects";

describe("isDate", () => {
	it.each([
		[new Date(), true],
		[new Date("invalid"), false],
		[new Date("2021-01-01"), true],
		[new Date("2021-01-01T00:00:00.000Z"), true],
		[new Date("2021-01-01T00:00:00.000+00:00"), true],
		[null, false],
		[undefined, false],
		["2021-01-01", false],
		[12345, false],
		[true, false],
		[{}, false],
		[[], false],
		[() => new Date(), false],
		[Symbol("date"), false],
		[{ toString: () => "Date" }, false],
		[new Date(Number.NaN), false],
	])("Should return %s for the value %s", (value, expected) => {
		expect(isDate(value)).toBe(expected);
	});
});
