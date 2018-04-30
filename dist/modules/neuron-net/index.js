var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "numeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const numeric_1 = __importDefault(require("numeric"));
    class NeuronNet {
        constructor(input, output, iteration) {
            this.neuronLayers = [];
            this.input = input;
            this.output = output;
            this.iteration = iteration;
        }
        derivSigmoid(x) {
            return numeric_1.default.mul(x, numeric_1.default.sub(1, x));
        }
        // forward direction to spread
        predict(input) {
            return this.neuronLayers.reduce((pre, current) => {
                current.input = pre.length !== 0 ? pre : input;
                current.train();
                return current.output;
            }, []);
        }
        backwardSpread() {
            let errorOutput, deltaWeight;
            const lastLayer = this.neuronLayers[this.neuronLayers.length - 1];
            for (let i = this.neuronLayers.length - 1; i >= 0; i = i - 1) {
                const currentLayer = this.neuronLayers[i];
                // last layer
                if (i === this.neuronLayers.length - 1) {
                    errorOutput = numeric_1.default.sub(this.output, lastLayer.output);
                }
                else {
                    errorOutput = numeric_1.default.dot(errorOutput, numeric_1.default.transpose(currentLayer.weight));
                }
                deltaWeight = numeric_1.default.dot(numeric_1.default.transpose(currentLayer.input), numeric_1.default.mul(this.derivSigmoid(currentLayer.output), errorOutput));
                currentLayer.weight = numeric_1.default.add(currentLayer.weight, deltaWeight);
            }
        }
        train() {
            for (let i = 1; i <= this.iteration; i++) {
                this.trainLayer();
                this.backwardSpread();
            }
        }
        trainLayer() {
            this.predict(this.input);
        }
        link(neuronLayer) {
            this.insertNeuralLayer(neuronLayer);
            return this;
        }
        insertNeuralLayer(neuronLayer) {
            this.neuronLayers.push(neuronLayer);
        }
    }
    exports.default = NeuronNet;
});
