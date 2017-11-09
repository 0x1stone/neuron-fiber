
var Perceptron = require('./neural-core.js')

var x = [
  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [1, 0, 1, 0],
  [1, 1, 1, 0]
]

var y = [
  [0],
  [0],
  [1],
  [1]
]

new Perceptron(x, y, 1000)
