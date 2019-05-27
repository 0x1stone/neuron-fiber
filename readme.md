# A high level util of neural net in javascript


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

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

### Nodejs environment

```js

import { NeuronNet, NeuronLayer } from 'neuron-fiber'

```

### Browser environment
```js

import { NeuronNet, NeuronLayer } from 'neuron-fiber/dest/browser/index.esm.js'

```

```js


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

// Result 7
console.log('result2:'+resultMap(result2)) 


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


#### .export(fileName)

* `fileName`: (default 'neural-params.json') The model will export .json into project root in nodejs environment(In browser will download a json file)


#### .summary()
The infomation about every layer print


#### .loadModel(options)
options <Object>
* `params`: The model what using export to make up
* `path`(nodejs environment only): The model file's path(.json,.text,*) 



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
