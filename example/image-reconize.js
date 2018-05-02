const { NeuronNet, NeuronLayer } = require('../dist/index')

// it looks like number: 0
const number0 = '*****' 
              + '*---*'
              + '*---*'
              + '*****' 

// it looks like number: 1
const number1 = '*----' 
              + '*----'
              + '*----'
              + '*----'

// it looks like number: 2
const number2 = '*****' 
              + '--**-'
              + '-**--'
              + '*****' 


function stringToArray(string){
  // * => 1
  // - => 0
  return string.trim().replace(/\*/g,1).replace(/-/g,0).split('')
}

const input = [stringToArray(number0), 
               stringToArray(number1), 
               stringToArray(number2)]


// [0,0,0] one vector hot to repsent output
const output = [[1,0,0],  // [1,0,0] represent number: 0
                [0,1,0],  // [0,1,0] represent number: 1
                [0,0,1]]  // [0,0,1] represent number: 2


function resultMap(result){
  const n = JSON.stringify(result[0].map(item=>{
    return Math.round(item)
  }))
  switch(n){
    case '[1,0,0]':
      return 0
    case '[0,1,0]':
      return 1
    case '[0,0,1]':
      return 2
    default:
      return null
  }
}


const iteration = 10000

const neuronNet = new NeuronNet(input, output, iteration)

neuronNet
  .link(new NeuronLayer(5))
  .link(new NeuronLayer(3))
  .link(new NeuronLayer(3))

neuronNet.train()

// test number:2
const data = '*****' 
           + '--**-'
           + '**---'
           + '*****' 


const result = neuronNet.predict([stringToArray(data)])
console.log('result:'+resultMap(result))
