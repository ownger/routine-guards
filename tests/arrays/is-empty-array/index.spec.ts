import { isEmptyArray } from "@/arrays";

describe("isEmptyArray", () => {
	it("should return true for an empty array", () => {
		const data: number[] = [];
		const result = isEmptyArray(data);

		expect(result).toBe(true);
	});

	it("should return false for a non-empty array", () => {
		const data = [1, 2, 3];
		const result = isEmptyArray(data);

		expect(result).toBe(false);
	});
});
