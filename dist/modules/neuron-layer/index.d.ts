import INeuralLayer from './type';
export default class NeuralLayer implements INeuralLayer {
    input: Array<any>;
    output: Array<any>;
    weight: Array<any>;
    private amount;
    private activationType;
    constructor(amount: number, activationType?: string);
    initWeight(): void;
    private derivSigmoid(x);
    private sigmoid(input);
    forward(): void;
    backward(): Array<any>;
}
