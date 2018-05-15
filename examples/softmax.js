const { NeuronNet, NeuronLayer } = require('../dist/index')

/**
 * input
 */
const input = [[1, 1, 0], [0, 1, 1], [0, 1, 1], [0, 1, 1], [0, 0, 1]]

/**
 * output: one hot vector
 */
const output = [[1,0], [0,1], [0,1], [0,1], [0,1]]

/**
 * training times
 */
const iteration = 500000

/**
 * data is ready to be predicted
 */
const data = [[1, 0, 0]]

const neuronNet = new NeuronNet(input, output, iteration)

neuronNet
  // .link(new NeuronLayer(5))
  // .link(new NeuronLayer(3))
  // .link(new NeuronLayer(2))
  .link(new NeuronLayer(2,'softmax'))

neuronNet.train()

// console.log('back weight')
console.log(neuronNet.neuronLayers[0])

console.log('result:')
console.info(neuronNet.predict(data))
