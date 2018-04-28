import numeric from 'numeric'

export default class NeuronNet {
  readonly x: Array<any>
  public y: Array<any>
  public resultY: Array<any>
  private iteration: number
  public neuronLayers: Array<any>
  constructor(x: Array<any>, y: Array<any>, iteration: number) {
    this.x = x
    this.y = y
    this.resultY
    this.iteration = iteration
    this.neuronLayers = []
  }

  predict(x: Array<any>) {
    // return this.sigmoid(numeric.dot(x, this.w))
  }

  public train() {
    for (let i = 1; i <= this.iteration; i++) {}
  }

  public link(neuronLayer: Array<any>): any {
    // neuronLayer
    // neuronLayer.x
    this.neuronLayers.push(neuronLayer)
    return this
  }
}
