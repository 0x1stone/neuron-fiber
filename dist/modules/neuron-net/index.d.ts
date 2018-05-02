import INeuralLayer from '../neuron-layer/type';
export default class NeuronNet {
    readonly input: Array<any>;
    output: Array<any>;
    private readonly iteration;
    readonly neuronLayers: Array<INeuralLayer>;
    constructor(input: Array<any>, output: Array<any>, iteration: number);
    private derivSigmoid(x);
    predict(input: Array<any>): any;
    private backwardSpread();
    train(): void;
    private trainLayer();
    link(neuronLayer: INeuralLayer): any;
    private insertNeuralLayer(neuronLayer);
}
