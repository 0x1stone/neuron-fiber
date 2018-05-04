import INeuralLayer from './type';
export default class NeuralLayer implements INeuralLayer {
    input: Array<any>;
    output: Array<any>;
    weight: Array<any>;
    private amount;
    constructor(amount: number);
    initWeight(): void;
}
