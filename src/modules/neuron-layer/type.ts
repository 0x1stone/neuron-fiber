export default interface INeuralLayer {
  input: Array<any>
  output: Array<any>
  weight: Array<any>
  forward: () => void
  backward: () => Array<any>
}
