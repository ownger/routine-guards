const typescript = require("@rollup/plugin-typescript");
const {dts} = require("rollup-plugin-dts");
const terser = require("@rollup/plugin-terser");

// Конфигурация для JavaScript
const jsConfig = {
    input: [
        "src/index.ts",
        "src/arrays/index.ts",
        "src/objects/index.ts",
        "src/primitives/index.ts",
        "src/utilities/index.ts",
    ],
    output: [
        {
            dir: "dist",
            format: "cjs",
            entryFileNames: "[name].cjs.js",
            preserveModules: true,
            preserveModulesRoot: "src",
            sourcemap: true,
        },
        {
            dir: "dist",
            format: "esm",
            entryFileNames: "[name].esm.js",
            preserveModules: true,
            preserveModulesRoot: "src",
            sourcemap: true,
        },
    ],
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json",
            declaration: false, // Отключаем генерацию .d.ts через typescript
        }),
        terser(),
    ],
};

// Конфигурация для TypeScript деклараций
const dtsConfig = {
    input: [
        "src/index.ts",
        "src/arrays/index.ts",
        "src/objects/index.ts",
        "src/primitives/index.ts",
        "src/utilities/index.ts",
    ],
    output: {
        dir: "dist",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: "src",
    },
    plugins: [dts()],
};

module.exports = [jsConfig, dtsConfig];
