import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: {
    file: "./dist/index.js",
    format: "esm",
    name: "bundle"
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({ 
      exclude: "node_modules/**",
      presets: ["@babel/env", "@babel/preset-react"]
    }),
    commonjs(),
    postcss()
  ]
};