import numeric from 'numeric'
import Activator from '../activator'
import INeuralLayer from './type'

export default class NeuralLayer extends Activator implements INeuralLayer{
  public input: Array<any>
  public output: Array<any>
  public weight: Array<any>
  private bias: number
  private amount: number
  private activationType: string
  private isInit: boolean = false
  public directOutput: Array<any>

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
    this.directOutput = numeric.add(numeric.dot(this.input, this.weight),this.bias)
    switch (this.activationType){
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

  public backward():Array<any> {
    switch (this.activationType){
      case 'sigmoid':
        return this.derivSigmoid(this.output)
      case 'softmax':
        return this.derivSoftmax(this.output)
      default:
        throw new Error('backward activation type not exist')
    }   
  }
}
