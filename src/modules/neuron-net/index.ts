import numeric from 'numeric'

export default class NeuronNet {
  readonly x: Array<any>
  public y: Array<any>
  public resultY: Array<any>
  private iteration: number
  constructor(x: Array<any>, y: Array<any>, iteration: number) {
    this.x = x
    this.y = y
    this.resultY
    this.iteration = iteration
    this.train()
  }

  predict(x: Array<any>) {
    // return this.sigmoid(numeric.dot(x, this.w))
  }

  train() {
    for (let i = 1; i <= this.iteration; i++) {
      // 权重更新算法
      // W(j)=W(j)+delta W(j)
      // delata W(j)= X(j) .* (Y-Y') * 学习率n

      // 学习率 derivSigmoid() 来构建,代表 sigmoid 的导数，即斜率

      // this.resultY = this.predict(this.x) // Y'= w.x
      // const deltaY = numeric.sub(this.y, this.resultY) // (Y-Y')
      // const deltaW = numeric.dot(
      //   numeric.transpose(this.x),
      //   numeric.mul(this.derivSigmoid(this.resultY), deltaY)
      // ) // X(j) .*  （学习率n * (Y-Y')）

      // this.w = numeric.add(this.w, deltaW) // W(j)=W(j)+delta W(j)
    }
  }
}
