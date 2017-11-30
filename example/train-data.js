
const Perceptron = require('../index.js')

/**
 * input
 */
const x = [
  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [1, 0, 1, 0],
  [1, 1, 1, 0]
]

/**
 * output
 */
const y = [
  [0],
  [0],
  [1],
  [1]
]

new Perceptron(x, y, 1000)
