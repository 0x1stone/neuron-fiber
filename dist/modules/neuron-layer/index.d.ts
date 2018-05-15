import Activator from '../activator';
import INeuralLayer from './type';
export default class NeuralLayer extends Activator implements INeuralLayer {
    input: Array<any>;
    output: Array<any>;
    weight: Array<any>;
    private bias;
    private amount;
    activationType: string;
    private isInit;
    directOutput: Array<any>;
    constructor(amount: number, activationType?: string);
    private initWeight();
    private initBias();
    forward(): void;
    backward(): Array<any>;
}
