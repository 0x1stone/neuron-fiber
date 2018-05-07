import numeric from 'numeric'
import INeuralLayer from './type'

export default class NeuralLayer implements INeuralLayer {
  public input: Array<any>
  public output: Array<any>
  public weight: Array<any>
  private bias: number
  private amount: number
  private activationType:string
  constructor(amount: number, activationType: 'sigmoid' | 'softmax' ='sigmoid') {
    this.activationType = activationType
    this.amount = amount
  }

  private initWeight() {
    this.weight = numeric.sub(
      numeric.mul(2, numeric.random([this.input[0].length, this.amount])),
      1
    )
  }

  private initBias(){
    this.bias=((Math.random() - 0.5) * 2)
  }

  private derivSigmoid(x: Array<any>) {
    return numeric.mul(x, numeric.sub(1, x))
  }

  private sigmoid(input: Array<any>) {
    return numeric.div(1, numeric.add(1, numeric.exp(numeric.neg(input))))
  }

  public forward() {
    if (!this.weight && !this.bias) {
      this.initWeight()
      this.initBias()
    }
    const directOutput = numeric.add(numeric.dot(this.input, this.weight),this.bias)
    this.output = this.sigmoid(directOutput)
  }

  public backward():Array<any> {
    return this.derivSigmoid(this.output)
  }
}
