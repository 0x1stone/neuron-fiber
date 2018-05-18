import { NeuronLayer } from '../src/index'

describe('NeuronLayer', function() {
  // const result = neuronNet.predict(testdata)
  it('weight formt should right', function() {
    const vector = 3
    const neuralLayer = new NeuronLayer(vector)
    neuralLayer.input = [[0, 0, 1, 0], [0, 1, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0]]
    neuralLayer.forward()
    expect(neuralLayer.weight[0].length).toBe(vector)
    expect(neuralLayer.weight.length).toBe(neuralLayer.input.length)
  })

  it('error label should be negtive in softmax', function() {
    const input = [[1, 1, 0], [0, 1, 1], [0, 1, 1], [0, 1, 1], [0, 0, 1]]
    const output = [[1, 0], [0, 1], [0, 1], [0, 1], [0, 1]]
    const neuralLayer = new NeuronLayer(2, 'softmax')
    neuralLayer.input = input
    neuralLayer.forward()
    const deltaWeight = neuralLayer.backward()
    const flatternDeltaWeight = flattern(deltaWeight)
    const flatternDeltaOutput = flattern(output)
    flatternDeltaOutput.forEach((item, index) => {
      if (item === 1) {
        expect(flatternDeltaWeight[index]).toBeLessThan(0)
      }else{
        expect(flatternDeltaWeight[index]).toBeGreaterThan(0)
      }  
    })
    function flattern(input) {
      var results = []
      loop(input)
      function loop(input) {
        return input.map(function(item, index) {
          if (item instanceof Array) {
            return loop(item)
          } else {
            results.push(item)
          }
        })
      }
      return results
    }
  })
})
