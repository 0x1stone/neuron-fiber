import numeric from 'numeric'
import INeuralLayer from './type'

export default class NeuralLayer implements INeuralLayer {
  public input: Array<any>
  public output: Array<any>
  public weight: Array<any>
  private amount: number
  constructor(amount: number) {
    this.amount = amount
  }

  public initWeight() {
    this.weight = numeric.sub(
      numeric.mul(2, numeric.random([this.input[0].length, this.amount])),
      1
    )
  }
}
