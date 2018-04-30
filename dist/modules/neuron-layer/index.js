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
    class NeuralLayer {
        constructor(amount) {
            this.amount = amount;
        }
        initWeight() {
            this.weight = numeric_1.default.sub(numeric_1.default.mul(2, numeric_1.default.random([this.input[0].length, this.amount])), 1);
        }
        predict(input) {
            return this.sigmoid(numeric_1.default.dot(input, this.weight));
        }
        sigmoid(input) {
            return numeric_1.default.div(1, numeric_1.default.add(1, numeric_1.default.exp(numeric_1.default.neg(input))));
        }
        train() {
            if (!this.weight) {
                this.initWeight();
            }
            this.output = this.predict(this.input);
        }
    }
    exports.default = NeuralLayer;
});
