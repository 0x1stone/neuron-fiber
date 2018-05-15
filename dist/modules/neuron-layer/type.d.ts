export default interface INeuralLayer {
    input: Array<any>;
    output: Array<any>;
    directOutput: Array<any>;
    activationType: string;
    weight: Array<any>;
    forward: () => void;
    backward: () => Array<any>;
}
