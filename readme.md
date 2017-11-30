# 基于js的神经网络实现

[![Build Status](https://secure.travis-ci.org/rainlst/neural-network.png?branch=master)](http://secure.travis-ci.org/rainlst/neural-network)

> By stone


## 算法说明

权重更新算法

W(j)=W(j)+delta W(j)

delata W(j)= 学习率n * (Y-Y')* .X(j)


学习率 由derivSigmoid() 来构建, 为sigmoid的倒数，即斜率




