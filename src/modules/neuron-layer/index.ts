import numeric from 'numeric'
import Activator from '../activator'
import INeuralLayer from './type'

export default class NeuralLayer extends Activator implements INeuralLayer{
  public input: Array<any>
  public output: Array<any>
  public weight: Array<any>
  private bias: number
  private amount: number
  private activationType:string
  private isInit:boolean =false
  
  constructor(amount: number, activationType: 'sigmoid' | 'softmax' ='sigmoid') {
    super()
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

  public forward() {
    if (!this.isInit) {
      this.initWeight()
      this.initBias()
      this.isInit = true
    }
    const directOutput = numeric.add(numeric.dot(this.input, this.weight),this.bias)
    this.output = this.sigmoid(directOutput)
  }

  public backward():Array<any> {
    return this.derivSigmoid(this.output)
  }
}
