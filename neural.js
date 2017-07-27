const numeric = require('numeric')
function nonlin (x, deriv) {
  if (deriv) {
    return numeric.mul(x, numeric.sub(1, x));
  }
  return numeric.div(1, numeric.add(1, numeric.exp(numeric.neg(x)))); 
}

function train_neural (X, y, iteration) {
  // initialize weights
  var syn0 = numeric.sub(numeric.mul(2, numeric.random([3, 1])), 1); // 权重W 初始化 [0~1]之间
  //Training loop
  var i = 0;
  var l1
  for (; i < iteration; i++) {
    // 权重更新算法
    // W(j)=W(j)+delta W(j)
    // delata W(j)= 学习率n * (Y-Y')* X(j)

    // 学习率 [0,1]之间的一个小数
    var l0 = X;
    var l1 = nonlin(numeric.dot(l0, syn0)); 
    var l1_error = numeric.sub(y, l1); // 偏移量 loss
    var l1_delta = numeric.mul(l1_error, nonlin(l1, true));
    
    syn0 = numeric.add(syn0, numeric.dot(numeric.transpose(l0), l1_delta)); // 相关性矩阵
  }
  return { syn0, l1 }
}

//Initial input/ouput values
var X = [
  [0, 0, 1],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];

var y = [
  [0],
  [0],
  [1],
  [1]
];

console.log(train_neural(X, y, 1))
