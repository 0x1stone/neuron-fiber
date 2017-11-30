
var Perceptron = require('../index.js')

/**
 * input
 */
var x = [
  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [1, 0, 1, 0],
  [1, 1, 1, 0]
]

/**
 * output
 */
var y = [
  [0],
  [0],
  [1],
  [1]
]

new Perceptron(x, y, 1000)
