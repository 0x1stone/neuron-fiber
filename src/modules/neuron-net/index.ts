import numeric from 'numeric'
import INeuralLayer from '../neuron-layer/type'

export default class NeuronNet {
  readonly input: Array<any>
  public output: Array<any>
  private iteration: number
  public neuronLayer: INeuralLayer | null
  constructor(input: Array<any>, output: Array<any>, iteration: number) {
    this.input = input
    this.output = output
    this.iteration = iteration
    this.neuronLayer = null
  }

  public predict(x: Array<any>) {
    // return this.sigmoid(numeric.dot(x, this.w))
  }

  public train() {
    for (let i = 1; i <= this.iteration; i++) {
      this.trainLayer(this.neuronLayer)
    }
  }

  private trainLayer(neuronLayer: INeuralLayer) {
    neuronLayer.train()
  }

  public link(neuronLayer: INeuralLayer): any {
    this.insertNeuralLayer(neuronLayer)
    return this
  }

  private insertNeuralLayer(neuronLayer: INeuralLayer) {
    // first layer
    if (!this.neuronLayer) {
      this.neuronLayer = neuronLayer
      this.neuronLayer.input = this.input
      return
    }
    if (Object.keys(this.neuronLayer.next).length === 0) {
      this.neuronLayer.next = neuronLayer
    } else {
      this.insertNeuralLayer(neuronLayer.next)
    }
  }
}
