var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "numeric", "../activator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const numeric_1 = __importDefault(require("numeric"));
    const activator_1 = __importDefault(require("../activator"));
    class NeuralLayer extends activator_1.default {
        constructor(amount, activationType = 'sigmoid') {
            super();
            this.isInit = false;
            this.activationType = activationType;
            this.amount = amount;
        }
        initWeight() {
            this.weight = numeric_1.default.sub(numeric_1.default.mul(2, numeric_1.default.random([this.input[0].length, this.amount])), 1);
        }
        initBias() {
            this.bias = ((Math.random() - 0.5) * 2);
        }
        forward() {
            if (!this.isInit) {
                this.initWeight();
                this.initBias();
                this.isInit = true;
            }
            const directOutput = numeric_1.default.add(numeric_1.default.dot(this.input, this.weight), this.bias);
            switch (this.activationType) {
                case 'sigmoid':
                    this.output = this.sigmoid(directOutput);
                    break;
                case 'softmax':
                    null;
                    break;
                default:
                    throw new Error('activation type not exist');
            }
        }
        backward() {
            switch (this.activationType) {
                case 'sigmoid':
                    return this.derivSigmoid(this.output);
                default:
                    throw new Error('activation type not exist');
            }
        }
    }
    exports.default = NeuralLayer;
});
