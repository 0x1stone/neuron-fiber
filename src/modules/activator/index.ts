import numeric from 'numeric'

export default class Activator{
  public derivSigmoid(inputs: Array<any>) {
    return numeric.mul(inputs, numeric.sub(1, inputs))
  }
  public sigmoid(inputs: Array<any>) {
    return numeric.div(1, numeric.add(1, numeric.exp(numeric.neg(inputs))))
  }
  public softmax(inputs: Array<any>){
    const expInputs = numeric.exp(inputs)
    const sum = numeric.mapreduce('accum += xi','0')
    const inputSums = expInputs.map((input:Array<any>)=>{
      return sum(input)
    })
    return expInputs.map((input:Array<any>,index:number)=>{
      const currenSum = inputSums[index]
      return numeric.div(input,currenSum)
    })
  }
}
