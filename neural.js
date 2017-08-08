const numeric = require('numeric')

class Perceptron {

  constructor(x, y, iteration) {
    // rate 学习率
    // iteration 训练次数
    // w 权重向量
    // errors 出错次数
    this.x = x
    this.y = y
    this.resultY
    this.w
    this.iteration = iteration

    this.initWeight()
    this.train()
  }

  initWeight () {
    this.w = numeric.sub(numeric.mul(2, numeric.random([3, 1])), 1)
  }

  predict (x) {

  }

  sigmoid (x) {
    return numeric.div(1, numeric.add(1, numeric.exp(numeric.neg(x))))
  }

  derivSigmoid (x) {
    return numeric.mul(x, numeric.sub(1, x))
  }

  train () {
    for (let i = 1; i <= this.iteration; i++) {
      // 权重更新算法
      // W(j)=W(j)+delta W(j)
      // delata W(j)= 学习率n * (Y-Y')* .X(j)

      // 学习率 derivSigmoid() 来构建,代表sigmoid的倒数，即斜率

      this.resultY = this.sigmoid(numeric.dot(this.x, this.w))  // Y'
      const deltaY = numeric.sub(y, this.resultY)  // (Y-Y')
      const deltaW = numeric.dot(
        numeric.transpose(this.x),
        numeric.mul(this.derivSigmoid(this.resultY), deltaY)
      ) // n * (Y-Y') .* X(j)

      this.w = numeric.add(this.w, deltaW) // W(j)=W(j)+delta W(j)
    }
    console.log(this.w)
    console.log(this.resultY)
  }
}

var x = [
  [0, 0, 1],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]

var y = [
  [0],
  [0],
  [1],
  [1]
]

new Perceptron(x, y, 1000)
