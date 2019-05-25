// const Perceptron = require('../dist/neuron-core').default
const { NeuronNet, NeuronLayer } = require('../dist/index.node')

/**
 * input
 */
const input = [
  [0, 0, 0],
  [0, 0, 1],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]]

/**
 * output
 */
const output = [
  [0],
  [0],
  [0],
  [1],
  [1]]

/**
 * training times
 */
const iteration = 20000

/**
 * data is ready to be predicted
 */
const data = [[1, 0, 0]]

const neuronNet = new NeuronNet(input, output, iteration)

neuronNet
  .link(new NeuronLayer(5))
  // .link(new NeuronLayer(3))
  .link(new NeuronLayer(1))

neuronNet.train()

console.log('result:')
console.info(neuronNet.predict(data))
