import typescript from 'rollup-plugin-typescript';
import { dts } from "rollup-plugin-dts"

export default [{
  input: 'src/index.ts',
  output: [{
    file: 'dest/index.common.js',
    format: 'cjs'
  },
  {
    file: 'dest/index.esm.js',
    format: 'esm'
  }],
  plugins: [
    typescript()
  ]
},
{
  input: 'src/index.ts',
  output: [{ file: "dest/index.d.ts", format: "es" }],
  plugins: [
    dts()
  ]
}]

