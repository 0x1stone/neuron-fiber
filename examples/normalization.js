// normalization network
const { NeuronNet, NeuronLayer } = require('../dist/index')

/**
 * input
 */
const input = [[0, 0, 0], [0, 0, 0], [0, 0.5, 0.5], [0.9, 0, 0.9], [0.8, 0.8, 0.8]]

/**
 * output
 */
const output = [[0], [0], [0], [0.8], [0.9]]

/**
 * training times
 */
const iteration = 1000

/**
 * data is ready to be predicted
 */
const data = [[0.9, 0.1, 0.9]]

const neuronNet = new NeuronNet(input, output, iteration)

neuronNet
  .link(new NeuronLayer(8, 'sigmoid'))
  .link(new NeuronLayer(3, 'sigmoid'))
  .link(new NeuronLayer(8, 'sigmoid'))
  .link(new NeuronLayer(data.length, 'sigmoid'))

neuronNet.train()

// neuronNet.summary()
console.log(neuronNet)

console.log('result:')
console.info(neuronNet.predict(data))
