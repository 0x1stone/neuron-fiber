const { NeuronNet, NeuronLayer } = require('../dest/node/index.common')
// import { NeuronNet, NeuronLayer } from '../dest/node/index'
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


/**
 *  Imagine looks like number: 7
 */
const number3 = '**   ' 
              + ' *   '
              + ' *   '
              + '     ' 

/**
 *  Imagine looks like number: 7  from different position
 */

const number4 = '     ' 
              + '   **'
              + '    *'
              + '    *' 

/**
 *  Imagine looks like number: 7
 */
const number5 = ' **  ' 
              + '  *  '
              + '  *  '
              + '     '


function stringToArray(string){
  return string.replace(/\*/g,1).replace(/\s/g,0).split('')
}

// Flattern inputs
const inputs = [stringToArray(number0), 
               stringToArray(number1), 
               stringToArray(number2),
               stringToArray(number3),
               stringToArray(number4),
               stringToArray(number5)
              ]


const outputs = [[1,0,0],
                 [0,1,0],  
                 [0,0,1],
                 [0,1,1],
                 [0,1,1],
                 [0,1,1]]  

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
    case '[0,1,1]': // [0,1,1] >>> number: 7
      return 7
    default:
      return null
  }
}

// Build neural net
const neuronNet = new NeuronNet(inputs, outputs, 20000)

neuronNet
  .link(new NeuronLayer(15,'sigmoid'))
  .link(new NeuronLayer(20,'sigmoid'))
  .link(new NeuronLayer(15,'sigmoid'))
  .link(new NeuronLayer(8,'sigmoid'))
  .link(new NeuronLayer(5,'sigmoid'))
  .link(new NeuronLayer(outputs[0].length,'sigmoid'))

// Begin to train
neuronNet.train()

// Summary all params of neural layers
neuronNet.summary()


const data1 = '*****' 
            + '*** *'
            + '*   *'
            + '*****' 

const data2 = '     '
            + ' **  '
            + '  *  '
            + '  *  '

// Export neural net params
neuronNet.export()


// Predict data
const result1 = neuronNet.predict([stringToArray(data1)])

const result2 = neuronNet.predict([stringToArray(data2)])

// Result 0
console.log('result1:'+resultMap(result1)) 

console.log('result2:'+resultMap(result2)) 
