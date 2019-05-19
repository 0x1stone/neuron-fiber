import numeric from 'numeric'
import Activator from '../activator'
import { INeuralLayer, TactivationType } from './type'


/**
 *
 *
 * @export
 * @class NeuralLayer
 * @extends {Activator}
 * @implements {INeuralLayer}
 */
export default class NeuralLayer extends Activator implements INeuralLayer {
  public input: Array<any>
  public output: Array<any>
  public weight: Array<any>
  public bias: Array<any>
  public amount: number
  public activationType: TactivationType
  public isInit: boolean = false
  public directOutput: Array<any>

  constructor(amount: number, activationType = 'sigmoid' as TactivationType) {
    super()
    this.activationType = activationType
    this.amount = amount
  }

  /**
   *
   *
   * @private
   * @memberof NeuralLayer
   */
  private initWeight() {
    this.weight = numeric.sub(
      numeric.mul(2, numeric.random([this.input[0].length, this.amount])),
      1
    )
  }

  /**
   *
   *
   * @private
   * @memberof NeuralLayer
   */
  private initBias() {
    // range 1~2
    this.bias = numeric.add(numeric.mul(numeric.random([1, this.amount]), 1), 1)
  }

  /**
   *
   *
   * @readonly
   * @type {Array<any>}
   * @memberof NeuralLayer
   */
  get formatBias(): Array<any> {
    const length = this.input.length
    return numeric.rep([length], ...this.bias)
  }

  /**
   *
   *
   * @memberof NeuralLayer
   */
  public forward() {
    if (!this.isInit) {
      this.initWeight()
      this.initBias()
      this.isInit = true
    }
    this.directOutput = numeric.add(numeric.dot(this.input, this.weight), this.formatBias)

    switch (this.activationType) {
      case 'sigmoid':
        this.output = this.sigmoid(this.directOutput)
        break
      case 'softmax':
        this.output = this.softmax(this.directOutput)
        break
      default:
        throw new Error('forward activation type not exist')
    }
  }

  /**
   *
   *
   * @returns {Array<any>}
   * @memberof NeuralLayer
   */
  public backward(): Array<any> {
    switch (this.activationType) {
      case 'sigmoid':
        return this.derivSigmoid(this.output)
      case 'softmax':
        return this.derivSoftmax(this.output)
      default:
        throw new Error('backward activation type not exist')
    }
  }
}
