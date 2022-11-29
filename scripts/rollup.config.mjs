import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

const bundle = config => ({
	...config,
	input: "./packages/core/index.ts",
	external: id => !/^[./]/.test(id),
});

export default [
	bundle({
		plugins: [esbuild()],
		output: [
			{
				file: `./packages/core/dist/index.js`,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: `./packages/core/dist/index.mjs`,
				format: "es",
				sourcemap: true,
			},
		],
	}),
	bundle({
		plugins: [dts()],
		output: {
			file: `./packages/core/dist/index.d.ts`,
			format: "es",
		},
	}),
];
