import numeric from 'numeric'
import INeuralLayer from '../neuron-layer/type'

export default class NeuronNet {
  readonly input: Array<any>
  public output: Array<any>
  private readonly iteration: number
  public readonly neuronLayers: Array<INeuralLayer> = []

  constructor(input: Array<any>, output: Array<any>, iteration: number) {
    this.input = input
    this.output = output
    this.iteration = iteration
  }

  private derivSigmoid(x: Array<any>) {
    return numeric.mul(x, numeric.sub(1, x))
  }

  // forward direction to spread
  public predict(input: Array<any>) {
    return this.neuronLayers.reduce(
      (pre: INeuralLayer, current: INeuralLayer): any => {
        current.input = pre.input.length !== 0 ? pre.input : input
        current.train()
        return { input: current.output }
      },
      { input: [] }
    )
  }

  private backwardSpread(): void {
    let errorOutput, deltaWeight
    const lastLayer = this.neuronLayers[this.neuronLayers.length - 1]
    for (let i = this.neuronLayers.length - 1; i >= 0; i = i - 1) {
      const currentLayer = this.neuronLayers[i]

      // last layer
      if (i === this.neuronLayers.length - 1) {
        errorOutput = numeric.sub(this.output, lastLayer.output)
      } else {
        errorOutput = numeric.dot(
          errorOutput,
          numeric.transpose(currentLayer.weight)
        )
      }

      deltaWeight = numeric.dot(
        numeric.transpose(currentLayer.input),
        numeric.mul(this.derivSigmoid(currentLayer.output), errorOutput)
      )

      currentLayer.weight = numeric.add(currentLayer.weight, deltaWeight)
    }
  }

  public train(): void {
    for (let i = 1; i <= this.iteration; i++) {
      this.trainLayer()
      this.backwardSpread()
    }
  }

  private trainLayer(): void {
    this.predict(this.input)
  }

  public link(neuronLayer: INeuralLayer): any {
    this.insertNeuralLayer(neuronLayer)
    return this
  }

  private insertNeuralLayer(neuronLayer: INeuralLayer) {
    this.neuronLayers.push(neuronLayer)
  }
}
