export type TactivationType = 'sigmoid' | 'softmax'
export interface INeuralLayerParams {
  isInit:boolean
  activationType: TactivationType
  weight: Array<any>
  amount: number
  bias: Array<any>
}
export interface INeuralLayer extends INeuralLayerParams {
  input: Array<any>
  output: Array<any>
  directOutput: Array<any>
  forward: () => void
  backward: () => Array<any>
}

