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
$ npm install bricks.js --save
```

## Usage

```es6

const Perceptron = require('../index.js')
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

new Perceptron(x, y, 1000)

```


## Algorithm

* 权重更新算法  W(j)=W(j)+delta W(j)
* delata W(j)= 学习率n * (Y-Y')* .X(j)
* 学习率 由derivSigmoid() 来构建, 为sigmoid的倒数，即斜率



