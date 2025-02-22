import {isObject} from "@/objects";

describe("isObject", () => {
    it.each([
        [{}, true],
        [{key: "value"}, true],
        [{key: 12345}, true],
        [Object.create(null), true],
        [{}, true],
        [[], false],
        [null, false],
        [undefined, false],
        [123, false],
        ["string", false],
        [true, false],
        [Symbol("symbol"), false],
        [() => {
        }, false],
        [new Date(), false],
        [/regex/, false],
    ])("Should return %s for the value %s", (value, expected) => {
        expect(isObject(value)).toBe(expected);
    });
});
