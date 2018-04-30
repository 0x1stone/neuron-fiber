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
            this.weight = [];
            this.amount = amount;
            this.initWeight();
        }
        set output(value) {
            if (this.next) {
                this.next.input = value;
            }
        }
        initWeight() {
            this.weight = numeric_1.default.sub(numeric_1.default.mul(2, numeric_1.default.random([this.input[0].length, 1])), 1);
        }
        predict(x) {
            return this.sigmoid(numeric_1.default.dot(x, this.weight));
        }
        sigmoid(x) {
            return numeric_1.default.div(1, numeric_1.default.add(1, numeric_1.default.exp(numeric_1.default.neg(x))));
        }
        derivSigmoid(x) {
            return numeric_1.default.mul(x, numeric_1.default.sub(1, x));
        }
        train() {
            // for (let i = 1; i <= this.iteration; i++) {
            // 权重更新算法
            // W(j)=W(j)+delta W(j)
            // delata W(j)= X(j) .* (Y-Y') * 学习率n
            // Y'= w.x
            this.output = this.predict(this.input);
            // (Y-Y')
            const errorOutput = numeric_1.default.sub(this.output, this.output);
            // X(j) .*  （学习率n * (Y-Y')）
            const deltaW = numeric_1.default.dot(numeric_1.default.transpose(this.input), numeric_1.default.mul(this.derivSigmoid(this.output), errorOutput));
            this.weight = numeric_1.default.add(this.weight, deltaW); // W(j)=W(j)+delta W(j)
        }
    }
    exports.default = NeuralLayer;
});
