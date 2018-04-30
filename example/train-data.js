// const Perceptron = require('../dist/neuron-core').default
const { NeuronNet, NeuronLayer } = require('../dist/index')

/**
 * input
 */
const input = [[0, 0, 1, 0], [0, 1, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0]]

/**
 * output
 */
const output = [[0], [0], [1], [1]]

/**
 * training times
 */
const iteration = 1

/**
 * data ready to predict result
 */
const data = [[1, 1, 1, 1]]

const neuronNet = new NeuronNet(input, output, iteration)

neuronNet
  .link(new NeuronLayer(4))
  .link(new NeuronLayer(3))
  .link(new NeuronLayer(1))

neuronNet.train()

console.log(neuronNet)
