# Neural net based in javascript (sigmoid)


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

> "You want to explore a forest ,then a tree is a best place to do"

## Getting Started

Follow these steps:

1. [Install](#install)
2. [Usage](#usage)
3. [API](#API)
4. [Algorithm](#algorithm)
5. **[Review Example Code](https://github.com/rainlst/neuron-fiber/tree/master/examples)**

## Install

```
$ npm install neuron-fiber --save
```

## Usage

```js
import { NeuronNet, NeuronLayer } from 'neuron-fiber'

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

// Flattern inputs
const inputs = [stringToArray(number0), 
               stringToArray(number1), 
               stringToArray(number2)]


const outputs = [[1,0,0],
                 [0,1,0],  
                 [0,0,1]]  

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

// Build neural net
const neuronNet = new NeuronNet(inputs, outputs, 10000)

neuronNet
  .link(new NeuronLayer(5,'sigmoid'))
  .link(new NeuronLayer(3,'sigmoid'))
  .link(new NeuronLayer(3,'sigmoid'))

// Begin to train
neuronNet.train()

// Summary all params of neural layers
neuronNet.summary()

const data = '*****' 
           + '**  *'
           + '*   *'
           + '*****' 

// Export neural net params
neuronNet.export()


// Predict data
const result = neuronNet.predict([stringToArray(data)])

// Result 0
console.log('result:'+resultMap(result)) 



```
## API


### new NeuronNet(inputs, outputs, iteration)
* `inputs`:the data sample of inputs
* `outputs`:the data sample of outputs
* `iteration`:the number of training times


#### .link(options)

The options is a object obtain a layer of neural layer


#### .train()

Begin to train and modify the weight of each neural layer


#### .predict(input)

This will return results
* `input`: The data should to be predicted


#### .expot(filePath)
* `filePath`: The model will export .json into file


#### .summary()
The infomation about every layer print


#### .loadModel(options)
options <Object>
* `params`: The model what using export to make up
* `path`: The model file's path(.json,.text,*)



### new NeuronLayer(neuronNumber,activatorType)

* `neuronNumber`: the amount of neurons in this neural layer
* `activatorType`: 'sigmoid'



## Algorithm
* Sigmoid
* Softmax(WIP)
* ReLU(WIP)
* Tanh(WIP)

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 lau stone

[npm-image]: https://img.shields.io/npm/v/neuron-fiber.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/neuron-fiber
[travis-image]: https://img.shields.io/travis/rainlst/neuron-fiber.svg?branch=master&style=flat-square
[travis-url]: https://travis-ci.org/rainlst/neuron-fiber
