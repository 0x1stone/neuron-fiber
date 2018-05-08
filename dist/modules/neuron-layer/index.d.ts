import Activator from '../activator';
import INeuralLayer from './type';
export default class NeuralLayer extends Activator implements INeuralLayer {
    input: Array<any>;
    output: Array<any>;
    weight: Array<any>;
    private bias;
    private amount;
    private activationType;
    private isInit;
    constructor(amount: number, activationType?: 'sigmoid' | 'softmax');
    private initWeight();
    private initBias();
    forward(): void;
    backward(): Array<any>;
}
