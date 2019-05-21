import numeric from 'numeric'
import { INeuralLayer, INeuralLayerParams } from '../neuron-layer/type'
import { TloadModelOpt, RequireAtLeastOne } from './type'
import NeuralLayer from '../neuron-layer';

/**
 *
 *
 * @export
 * @class NeuronNet
 */
export default class NeuronNet {
  readonly input: Array<any>
  public output: Array<any>
  private readonly iteration: number
  public neuronLayers: Array<INeuralLayer> = []

  constructor(input: Array<any> = [], output: Array<any> = [], iteration: number = 0) {
    this.input = input
    this.output = output
    this.iteration = iteration
  }


  /**
   * Forward direction to spread
   *
   * @param {Array<any>} input
   * @returns
   * @memberof NeuronNet
   */
  public predict(input: Array<any>) {
    return this.neuronLayers.reduce((pre: any, current: INeuralLayer): any => {
      current.input = pre.length !== 0 ? pre : input
      current.forward()
      return current.output
    }, [])
  }

  /**
   *
   *
   * @private
   * @memberof NeuronNet
   */
  private backwardSpread(): void {
    let errorOutput, deltaWeight, currentLayer, preLayer
    const lastLayer = this.neuronLayers[this.neuronLayers.length - 1]
    for (let i = this.neuronLayers.length - 1; i >= 0; i = i - 1) {
      currentLayer = this.neuronLayers[i]

      // last layer
      if (i === this.neuronLayers.length - 1) {
        errorOutput = numeric.sub(this.output, lastLayer.output)
      } else {
        errorOutput = numeric.dot(
          deltaWeight,
          numeric.transpose(preLayer.weight)
        )
      }

      switch (currentLayer.activationType) {
        case 'sigmoid':
          deltaWeight = numeric.mul(
            errorOutput,
            currentLayer.backward()
          )
          break
        case 'softmax':
          // console.log('softmax')
          deltaWeight = errorOutput
          break
        default:
          throw new Error('error type in neural net')
      }

      currentLayer.weight = numeric.add(
        currentLayer.weight,
        numeric.dot(numeric.transpose(currentLayer.input), deltaWeight)
      )

      preLayer = this.neuronLayers[i]
    }
  }

  /**
   *
   *
   * @memberof NeuronNet
   */
  public train(): void {
    for (let i = 1; i <= this.iteration; i++) {
      this.forwardSpread()
      this.backwardSpread()
    }
  }

  /**
   *
   *
   * @private
   * @memberof NeuronNet
   */
  private forwardSpread(): void {
    this.predict(this.input)
  }

  /**
   *
   *
   * @param {INeuralLayer} neuronLayer
   * @returns {*}
   * @memberof NeuronNet
   */
  public link(neuronLayer: INeuralLayer): any {
    this.insertNeuralLayer(neuronLayer)
    return this
  }

  /**
   *
   *
   * @private
   * @param {INeuralLayer} neuronLayer
   * @memberof NeuronNet
   */
  private insertNeuralLayer(neuronLayer: INeuralLayer) {
    this.neuronLayers.push(neuronLayer)
  }

  /**
   *
   *
   * @memberof NeuronNet
   */
  public summary() {
    console.dir(this.neuronLayersParams, { depth: null })
  }

  /**
   *
   *
   * @readonly
   * @memberof NeuronNet
   */
  get neuronLayersParams() {
    return this.neuronLayers.map(item => {
      return {
        isInit: true,
        activationType: item.activationType,
        amount: item.amount,
        weight: item.weight,
        bias: item.bias,
      }
    })
  }

  /**
   *
   *
   * @param {string} [name='neural-params' as string]
   * @memberof NeuronNet
   */
  public async export(name = 'neural-params' as string) {
    const fs = await import('fs')
    const fileName = /\.json$/.test(name) ? name : `${name}.json`
    const data = JSON.stringify(this.neuronLayersParams)
    fs.writeFileSync(fileName, data)
  }

  /**
   *
   *
   * @memberof NeuronNet
   */
  public loadModel(options: RequireAtLeastOne<TloadModelOpt, 'params' | 'path'>) {
    this.neuronLayers = [] // Clear 
    if (options.params) {
      this.loadModelFromJson(options.params)
    } else if (options.path) {
      this.loadModelFromFile(options.path)
    }
  }

  /**
   *
   *
   * @private
   * @memberof NeuronNet
   */
  private loadModelFromJson(params: INeuralLayerParams[]) {
    try {
      params.forEach(param => {
        const neuralLayer = new NeuralLayer(param.amount, param.activationType || 'sigmoid')
        neuralLayer.weight = param.weight
        neuralLayer.bias = param.bias
        neuralLayer.isInit = true
        this.link(neuralLayer)
      })
      console.log('[Info] Successfully load model')
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * Only support in nodejs
   *
   * @private
   * @memberof NeuronNet
   */
  private async loadModelFromFile(path: string) {
    const fs = await import('fs')
    fs.readFile(path, (err, data) => {
      try {
        if (err) throw err;
        const contents = JSON.parse(data.toString())
        this.loadModelFromJson(JSON.parse(contents))
      } catch (e) {
        console.error('[Error] Failure to convert .json file')
      }
    })
  }
}
