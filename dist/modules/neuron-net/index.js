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
            this.input = input;
            this.output = output;
            this.iteration = iteration;
            this.neuronLayer = null;
        }
        predict(x) {
            // return this.sigmoid(numeric.dot(x, this.w))
        }
        train() {
            for (let i = 1; i <= this.iteration; i++) { }
        }
        link(neuronLayer) {
            this.insertNeuralLayer(neuronLayer);
            return this;
        }
        insertNeuralLayer(neuronLayer) {
            // first layer
            if (!this.neuronLayer) {
                this.neuronLayer = neuronLayer;
                return;
            }
            if (Object.keys(this.neuronLayer.next).length !== 0) {
                this.neuronLayer.next = neuronLayer;
            }
            else {
                this.insertNeuralLayer(neuronLayer);
            }
        }
    }
    exports.default = NeuronNet;
});
