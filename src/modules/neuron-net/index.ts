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

  // forward direction to spread
  public predict(input: Array<any>) {  
    this.neuronLayers.reduce(
      (pre: INeuralLayer, current: INeuralLayer): any => {
        current.input = pre.input.length!==0 ? pre.input : input
        current.train()
        return { input: current.output }
      },
      { input: [] }
    )
  }

  public train() {
    for (let i = 1; i <= this.iteration; i++) {
      this.trainLayer()
    }
  }

  private trainLayer() {
    this.predict(this.input)

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
