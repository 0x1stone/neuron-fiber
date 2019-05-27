import typescript from 'rollup-plugin-typescript';
import { dts } from "rollup-plugin-dts"

export default [
  // Nodejs env
  {
    input: 'src/index.node.ts',
    output: [{
      file: 'dest/node/index.common.js',
      format: 'cjs'
    },
    {
      file: 'dest/node/index.esm.js',
      format: 'esm'
    }],
    plugins: [
      typescript()
    ]
  },
  // Browser env
  {
    input: 'src/index.browser.ts',
    output: [
      {
        file: 'dest/browser/index.common.js',
        format: 'cjs'
      },
      {
        file: 'dest/browser/index.esm.js',
        format: 'esm'
      }],
    plugins: [
      typescript()
    ]
  },
  // Node type defination 
  {
    input: 'src/index.node.ts',
    output: [{ file: "dest/node/index.d.ts", format: "es" }],
    plugins: [
      dts()
    ]
  },
  {
    input: 'src/index.browser.ts',
    output: [{ file: "dest/browser/index.d.ts", format: "es" }],
    plugins: [
      dts()
    ]
  }]

