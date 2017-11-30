# neuron based in javascript

[![neuron-fiber on NPM](https://img.shields.io/npm/v/neuron-fiber.svg?style=flat-square)](https://www.npmjs.com/package/neuron-fiber)
[![Build Status](https://secure.travis-ci.org/rainlst/neural-network.png?branch=master)](http://secure.travis-ci.org/rainlst/neural-network)

> By stone

## Getting Started

Follow these steps:

1. [Install](#install)
2. [Usage](#usage)
3. [Algorithm](#algorithm)
4. **[Review Example Code](https://github.com/rainlst/neuron-fiber/tree/master/example)**

## Install

```
$ npm install neuron-fiber --save
```

## Usage

```es6
const Perceptron = require('neuron-fiber')
/**
 * input
 */
const x = [
  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [1, 0, 1, 0],
  [1, 1, 1, 0]
]

/**
 * output
 */
const y = [
  [0],
  [0],
  [1],
  [1]
]

/**
 * training times
 */
const times = 1000


/**
 * data ready to predict result
 */
const data=[[1, 1, 1, 1]]


/**
 * begin to train 1000 times
 */
const neuron = new Perceptron(x, y, times)


/**
 * result is predicted
 */
const result = neuron.predict(data)


```

## Algorithm

* 权重更新算法 W(j)=W(j)+delta W(j)
* delata W(j)= 学习率 n _ (Y-Y')_ .X(j)
* 学习率 由 derivSigmoid() 来构建 , 为 sigmoid 的倒数，即斜率
