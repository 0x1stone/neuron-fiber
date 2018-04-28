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
    exports.default = class Perceptron {
        constructor(x, y, iteration) {
            // n 学习率
            // iteration 训练次数
            // w 权重向量
            this.x = x;
            this.y = y;
            this.resultY;
            this.w;
            this.iteration = iteration;
            this.initWeight();
            this.train();
        }
        initWeight() {
            this.w = numeric_1.default.sub(numeric_1.default.mul(2, numeric_1.default.random([this.x[0].length, 1])), 1);
        }
        predict(x) {
            return this.sigmoid(numeric_1.default.dot(x, this.w));
        }
        sigmoid(x) {
            return numeric_1.default.div(1, numeric_1.default.add(1, numeric_1.default.exp(numeric_1.default.neg(x))));
        }
        derivSigmoid(x) {
            return numeric_1.default.mul(x, numeric_1.default.sub(1, x));
        }
        train() {
            for (let i = 1; i <= this.iteration; i++) {
                // 权重更新算法
                // W(j)=W(j)+delta W(j)
                // delata W(j)= X(j) .* (Y-Y') * 学习率n
                // 学习率 derivSigmoid() 来构建,代表 sigmoid 的导数，即斜率
                this.resultY = this.predict(this.x); // Y'= w.x
                const deltaY = numeric_1.default.sub(this.y, this.resultY); // (Y-Y')
                const deltaW = numeric_1.default.dot(numeric_1.default.transpose(this.x), numeric_1.default.mul(this.derivSigmoid(this.resultY), deltaY)); // X(j) .*  （学习率n * (Y-Y')）
                this.w = numeric_1.default.add(this.w, deltaW); // W(j)=W(j)+delta W(j)
            }
        }
    };
});
