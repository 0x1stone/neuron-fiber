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
        constructor(x, y, iteration) {
            this.x = x;
            this.y = y;
            this.resultY;
            this.iteration = iteration;
            this.neuronLayers = [];
        }
        predict(x) {
            // return this.sigmoid(numeric.dot(x, this.w))
        }
        train() {
            for (let i = 1; i <= this.iteration; i++) { }
        }
        link(neuronLayer) {
            // neuronLayer
            // neuronLayer.x
            this.neuronLayers.push(neuronLayer);
            return this;
        }
    }
    exports.default = NeuronNet;
});
