import { isFilledArray } from "@/arrays";

describe("isFilledArray", () => {
	it("should return true for a non-empty array", () => {
		const data: number[] = [1, 2, 3];
		const result = isFilledArray(data);

		expect(result).toBe(true);
	});

	it("should return false for an empty array", () => {
		const data: number[] = [];
		const result = isFilledArray(data);

		expect(result).toBe(false);
	});
});
