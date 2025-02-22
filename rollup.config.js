const typescript = require("@rollup/plugin-typescript");
const {dts} = require("rollup-plugin-dts");
const terser = require("@rollup/plugin-terser");

module.exports = [
    {
        input: "src/index.ts",
        output: [
            {
                file: "dist/main.cjs.js",
                format: "cjs",
                sourcemap: true,
            },
            {
                file: "dist/main.esm.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            typescript({
                tsconfig: "./tsconfig.json",
            }),
            terser(),
        ],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/index.d.ts",
            format: "es",
        },
        plugins: [dts()],
    },
];
