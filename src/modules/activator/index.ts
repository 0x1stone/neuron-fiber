import numeric from 'numeric'

export default class Activator{
  public derivSigmoid(inputs: Array<any>) {
    return numeric.mul(inputs, numeric.sub(1, inputs))
  }
  public sigmoid(inputs: Array<any>) {
    return numeric.div(1, numeric.add(1, numeric.exp(numeric.neg(inputs))))
  }
  public softmax(inputs: Array<any>){
    console.log(inputs)
    const sum = numeric.mapreduce('accum += xi','0')
    return sum(...inputs)
  }
}
