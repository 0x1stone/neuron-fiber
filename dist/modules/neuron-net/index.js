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
        predict(x) {
            // return this.sigmoid(numeric.dot(x, this.w))
        }
        train() {
            for (let i = 1; i <= this.iteration; i++) {
                this.trainLayer(this.neuronLayers, this.input, this.output);
            }
        }
        trainLayer(neuronLayers, input, output) {
            // 正向传播
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
