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
            this.train();
        }
        predict(x) {
            // return this.sigmoid(numeric.dot(x, this.w))
        }
        train() {
            for (let i = 1; i <= this.iteration; i++) {
                // 权重更新算法
                // W(j)=W(j)+delta W(j)
                // delata W(j)= X(j) .* (Y-Y') * 学习率n
                // 学习率 derivSigmoid() 来构建,代表 sigmoid 的导数，即斜率
                // this.resultY = this.predict(this.x) // Y'= w.x
                // const deltaY = numeric.sub(this.y, this.resultY) // (Y-Y')
                // const deltaW = numeric.dot(
                //   numeric.transpose(this.x),
                //   numeric.mul(this.derivSigmoid(this.resultY), deltaY)
                // ) // X(j) .*  （学习率n * (Y-Y')）
                // this.w = numeric.add(this.w, deltaW) // W(j)=W(j)+delta W(j)
            }
        }
    }
    exports.default = NeuronNet;
});
