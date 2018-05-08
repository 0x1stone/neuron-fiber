import numeric from 'numeric'

export default class Activator{
  public derivSigmoid(x: Array<any>) {
    return numeric.mul(x, numeric.sub(1, x))
  }
  public sigmoid(input: Array<any>) {
    return numeric.div(1, numeric.add(1, numeric.exp(numeric.neg(input))))
  }
}
