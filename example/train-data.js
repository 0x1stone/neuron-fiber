
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

/**
 * training times
 */
const times = 1000

/**
 * data ready to predict result
 */
const data=[[1, 1, 1, 1]]

const neuron = new Perceptron(x, y, times)
console.log(neuron.w)
console.log(neuron.resultY)

const result = neuron.predict(data)
console.log(result)
