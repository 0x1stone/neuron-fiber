import numeric from 'numeric'

export default class Activator{

  public sigmoid(inputs: Array<any>) {
    return numeric.div(1, numeric.add(1, numeric.exp(numeric.neg(inputs))))
  }

  public derivSigmoid(inputs: Array<any>) {
    return numeric.mul(inputs, numeric.sub(1, inputs))
    
  }
 
  public softmax(inputs: Array<any>) {

    // Compute the softmax of vector inputs in a numerically stable way
    const shiftInputs = inputs.map(input => { 
      return numeric.div(input,Math.max(...input))
    })

    const expInputs = numeric.exp(shiftInputs)
    const sum = numeric.mapreduce('accum += xi','0')

    const inputSums = expInputs.map((input:Array<any>)=>{
      return sum(input)
    })
    return expInputs.map((input:Array<any>,index:number)=>{
      const currenSum = inputSums[index]
      return numeric.div(input,currenSum)
    })
  }

  public derivSoftmax(inputs: Array<any>){
    return numeric.mul(inputs,numeric.sub(1,inputs))  // p(1-p)
  }
}
