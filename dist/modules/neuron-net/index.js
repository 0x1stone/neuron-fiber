(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class NeuronNet {
        constructor(input, output, iteration) {
            this.neuronLayers = [];
            this.input = input;
            this.output = output;
            this.iteration = iteration;
        }
        // forward direction to spread
        predict(input) {
            this.neuronLayers.reduce((pre, current) => {
                current.input = pre.input.length !== 0 ? pre.input : input;
                current.train();
                return { input: current.output };
            }, { input: [] });
        }
        train() {
            for (let i = 1; i <= this.iteration; i++) {
                this.trainLayer();
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
            // first layer
            this.neuronLayers.push(neuronLayer);
        }
    }
    exports.default = NeuronNet;
});
