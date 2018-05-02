describe('neural', function() {
  var x = [[0, 0, 1, 0], [0, 1, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0]]
  var y = [[0], [0], [1], [1]]
  var testdata = [[0, 0, 1, 0]]

  var { NeuronNet, NeuronLayer } = require('../dist/index')

  var neuralNet, result
  beforeEach(function() {
    neuronNet = new NeuronNet(x, y, 1000)
    neuronNet
      .link(new NeuronLayer(5))
      .link(new NeuronLayer(3))
      .link(new NeuronLayer(1))
      
    neuronNet.train()
    result = neuronNet.predict(testdata)
  })
  it('shoulbe be a object', function() {
    expect(neuronNet.predict(testdata)).not.toEqual(null)
  })
})
