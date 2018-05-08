const { NeuronNet, NeuronLayer } = require('../dist/index')

/**
 *  Imagine looks like number: 0
 */
const number0 = '*****' 
              + '*   *'
              + '*   *'
              + '*****' 

/**
 *  Imagine looks like number: 1
 */
const number1 = '*    ' 
              + '*    '
              + '*    '
              + '*    '

/**
 *  Imagine looks like number: 2
 */
const number2 = '*****' 
              + '  ** '
              + ' **  '
              + '*****' 


function stringToArray(string){
  return string.replace(/\*/g,1).replace(/\s/g,0).split('')
}

const inputs = [stringToArray(number0), 
               stringToArray(number1), 
               stringToArray(number2)]


const outputs = [[1,0,0],
                 [0,1,0],  
                 [0,0,1]]  


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

const neuronNet = new NeuronNet(inputs, outputs, 10000)

neuronNet
  .link(new NeuronLayer(5))
  .link(new NeuronLayer(3))
  .link(new NeuronLayer(3))

neuronNet.train()

const data = '*****' 
           + '**  *'
           + '*   *'
           + '*****' 


const result = neuronNet.predict([stringToArray(data)])
console.log('result:'+resultMap(result))  //0
