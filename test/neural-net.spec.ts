import { NeuronNet, NeuronLayer } from '../src/index.node'
describe('neural', function() {
  // const result = neuronNet.predict(testdata)
  it('shoulbe be a object when layer is sigmoid', function() {
    var x = [[0, 0, 1, 0], [0, 1, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0]]
    var y = [[0], [0], [1], [1]]
    var testdata = [[0, 0, 1, 0]]
    const neuronNet = new NeuronNet(x, y, 20)
    neuronNet
      .link(new NeuronLayer(5,'sigmoid'))
      .link(new NeuronLayer(3,'sigmoid'))
      .link(new NeuronLayer(1,'sigmoid'))

    neuronNet.train()
    expect(neuronNet.predict(testdata)).not.toEqual(null)
  })
})
