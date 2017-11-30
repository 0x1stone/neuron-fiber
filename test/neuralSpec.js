describe('neural', function() {
  var x = [[0, 0, 1, 0], [0, 1, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0]]
  var y = [[0], [0], [1], [1]]
  var Neural = require('../src/neural-core.js')
  var neural
  beforeEach(function() {
    neural = new Neural(x, y, 1000)
  })
  it('shoulbe be a object', function() {
    expect(neural).not.toEqual(null)
  })
})
