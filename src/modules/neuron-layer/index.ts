import numeric from 'numeric'
import INeuralLayer from './type'

export default class NeuralLayer implements INeuralLayer {
  public input: Array<any>
  public weight: Array<any> = []
  // private iteration: number
  private amount: number
  public pre: INeuralLayer | null
  public next: INeuralLayer | null
  constructor(amount: number) {
    this.amount = amount
    this.initWeight()
  }

  set output(value: Array<any>) {
    if (this.next) {
      this.next.input = value
    }
  }

  initWeight() {
    this.weight = numeric.sub(
      numeric.mul(2, numeric.random([this.input[0].length, 1])),
      1
    )
  }

  predict(x: Array<any>) {
    return this.sigmoid(numeric.dot(x, this.weight))
  }

  sigmoid(x: Array<any>) {
    return numeric.div(1, numeric.add(1, numeric.exp(numeric.neg(x))))
  }

  derivSigmoid(x: Array<any>) {
    return numeric.mul(x, numeric.sub(1, x))
  }

  train() {
    // for (let i = 1; i <= this.iteration; i++) {
    // 权重更新算法
    // W(j)=W(j)+delta W(j)
    // delata W(j)= X(j) .* (Y-Y') * 学习率n
    // Y'= w.x
    this.output = this.predict(this.input)

    // (Y-Y')
    const errorOutput = numeric.sub(this.output, this.output)

    // X(j) .*  （学习率n * (Y-Y')）
    const deltaW = numeric.dot(
      numeric.transpose(this.input),
      numeric.mul(this.derivSigmoid(this.output), errorOutput)
    )

    this.weight = numeric.add(this.weight, deltaW) // W(j)=W(j)+delta W(j)
  }
  // }
}
