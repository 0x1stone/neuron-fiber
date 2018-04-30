export default interface INeuralLayer {
  input: Array<any>
  output: Array<any>
  weight: Array<any>
  next: INeuralLayer | null
  pre: INeuralLayer | null
}
