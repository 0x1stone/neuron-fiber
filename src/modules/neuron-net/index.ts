import numeric from 'numeric'
import INeuralLayer from '../neuron-layer/type'

export default class NeuronNet {
  readonly input: Array<any>
  public output: Array<any>
  private iteration: number
  public neuronLayers: Array<INeuralLayer> = []
  constructor(input: Array<any>, output: Array<any>, iteration: number) {
    this.input = input
    this.output = output
    this.iteration = iteration
  }

  public predict(x: Array<any>) {
    // return this.sigmoid(numeric.dot(x, this.w))
  }

  public train() {
    for (let i = 1; i <= this.iteration; i++) {
      this.trainLayer(this.neuronLayers, this.input, this.output)
    }
  }

  private trainLayer(
    neuronLayers: Array<INeuralLayer>,
    input: Array<any>,
    output: Array<any>
  ) {
    // 正向传播
    console.log(neuronLayers)
  }

  public link(neuronLayer: INeuralLayer): any {
    this.insertNeuralLayer(neuronLayer)
    return this
  }

  private insertNeuralLayer(neuronLayer: INeuralLayer) {
    // first layer
    this.neuronLayers.push(neuronLayer)
  }
}
