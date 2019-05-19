const { NeuronNet } = require('../dist/index')
const model = require('./model/image-reconize-model.json')


// Build neural net
const neuronNet = new NeuronNet()

function stringToArray(string){
  return string.replace(/\*/g,1).replace(/\s/g,0).split('')
}

// Map outputs to one hot vector
function resultMap(result){
  const n = JSON.stringify(result[0].map(item=>{
    return Math.round(item)
  }))
  switch(n){
    case '[1,0,0]': // [1,0,0] >>> number: 0
      return 0
    case '[0,1,0]': // [0,1,0] >>> number: 1
      return 1
    case '[0,0,1]': // [0,0,1] >>> number: 2
      return 2
    default:
      return null
  }
}


const data = '*****' 
           + ' *  *'
           + '**  *'
           + '*****' 

// Export neural net params
neuronNet.loadModel({
  params: model
})

console.log(neuronNet)

// Predict data
const result = neuronNet.predict([stringToArray(data)])

// Result 0
console.log('result:' + resultMap(result)) 
