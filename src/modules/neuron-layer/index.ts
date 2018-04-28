import numeric from 'numeric'

export default class Perceptron {
  readonly x: Array<any>
  public y: Array<any>
  public resultY: Array<any>
  public w: Array<any>
  private iteration: number
  private dimension: number
  constructor(dimension: number) {
    // n 学习率
    // iteration 训练次数
    // w 权重向量
    this.dimension = dimension
    this.resultY
    this.w

    // this.initWeight()
    // this.train()
  }

  initWeight() {
    this.w = numeric.sub(
      numeric.mul(2, numeric.random([this.x[0].length, 1])),
      1
    )
  }

  predict(x: Array<any>) {
    return this.sigmoid(numeric.dot(x, this.w))
  }

  sigmoid(x: Array<any>) {
    return numeric.div(1, numeric.add(1, numeric.exp(numeric.neg(x))))
  }

  derivSigmoid(x: Array<any>) {
    return numeric.mul(x, numeric.sub(1, x))
  }

  train() {
    for (let i = 1; i <= this.iteration; i++) {
      // 权重更新算法
      // W(j)=W(j)+delta W(j)
      // delata W(j)= X(j) .* (Y-Y') * 学习率n

      // 学习率 derivSigmoid() 来构建,代表 sigmoid 的导数，即斜率

      this.resultY = this.predict(this.x) // Y'= w.x
      const deltaY = numeric.sub(this.y, this.resultY) // (Y-Y')
      const deltaW = numeric.dot(
        numeric.transpose(this.x),
        numeric.mul(this.derivSigmoid(this.resultY), deltaY)
      ) // X(j) .*  （学习率n * (Y-Y')）

      this.w = numeric.add(this.w, deltaW) // W(j)=W(j)+delta W(j)
    }
  }
}
