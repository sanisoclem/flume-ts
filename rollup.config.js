import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import svgr from '@svgr/rollup'
import postCssNested from'postcss-nested';
import packageJson from './package.json' assert { type: "json" };
import { fileURLToPath } from 'url';
//https://github.com/rollup/plugins/issues/1366
const __filename = fileURLToPath(import.meta.url);
global['__filename'] = __filename;
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      postcss({
        modules: true,
        plugins: [postCssNested]
      }),
      resolve(),
      svgr(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
