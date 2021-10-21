import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import babel from "rollup-plugin-babel";
import pkg from './package.json'

const isPro = process.env.NODE_ENV === "production";
const plugins = [
    commonjs(),
    babel(),
    filesize()
]

if (isPro) {
    plugins.push(terser());
}

export default [
  {
    input: 'src/index.js',
    output: [
		{ file: pkg.main, format: 'cjs', name: 'hIosInput' },
		{ file: pkg.module, format: 'esm', name: 'hIosInput' },
		{ file: pkg.browser, format: 'umd', name: 'hIosInput' }
    ],
    plugins
  }
]
