import { NeuronLayer } from '../src/index'
describe('NeuronLayer', function() {
  // const result = neuronNet.predict(testdata)
  it('weight formt should right', function() {
    const vector =3 
    const neuralLayer = new NeuronLayer(vector)
    neuralLayer.input = [[0, 0, 1, 0], [0, 1, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0]]
    neuralLayer.forward()
    
    expect(neuralLayer.weight[0].length).toBe(vector)
    expect(neuralLayer.weight.length).toBe(neuralLayer.input.length)
    
  })
})

