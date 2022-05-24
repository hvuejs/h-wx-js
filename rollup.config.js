import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";
const path = require("path");
import nodeResolve from "@rollup/plugin-node-resolve";

const resolve = (...args) => path.resolve(...args);

const extensions = [".js", ".ts"];

const isPro = process.env.NODE_ENV === "production";
const plugins = [
	commonjs(),
	typescript(),
	nodeResolve({
		extensions,
		modulesOnly: true,
	}),
	babel({
		exclude: "node_modules/**",
		extensions,
	}),
	filesize(),
];

if (isPro) {
	plugins.push(terser());
}

// 设置头部注释信息
const banner =
	"/*!\n" +
	` * h-wx-js v${pkg.version}\n` +
	` * (c) 2018-${new Date().getFullYear()} hao\n` +
	" * Released under the MIT License.\n" +
	" */";

// 设置尾部注释信息
const footer = `\n/** ${new Date()} **/`;

export default [
	{
		input: "src/index.ts",
		output: [
			{ file: pkg.main, format: "cjs", name: "hwx", banner, footer },
			{ file: pkg.module, format: "esm", name: "hwx", banner, footer },
			{ file: pkg.browser, format: "umd", name: "hwx", banner, footer },
		],
		plugins,
	},
	{
		// 生成 .d.ts 类型声明文件
		input: resolve("./src/index.ts"),
		output: {
			file: resolve("./", pkg.types),
			format: "es",
		},
		plugins: [dts()],
	},
];
