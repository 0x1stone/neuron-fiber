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
    class Activator {
        sigmoid(inputs) {
            return numeric_1.default.div(1, numeric_1.default.add(1, numeric_1.default.exp(numeric_1.default.neg(inputs))));
        }
        derivSigmoid(inputs) {
            return numeric_1.default.mul(inputs, numeric_1.default.sub(1, inputs));
        }
        softmax(inputs) {
            // Compute the softmax of vector inputs in a numerically stable way
            const shiftInputs = inputs.map(input => {
                return numeric_1.default.div(input, Math.max(...input));
            });
            const expInputs = numeric_1.default.exp(shiftInputs);
            const sum = numeric_1.default.mapreduce('accum += xi', '0');
            const inputSums = expInputs.map((input) => {
                return sum(input);
            });
            return expInputs.map((input, index) => {
                const currenSum = inputSums[index];
                return numeric_1.default.div(input, currenSum);
            });
        }
    }
    exports.default = Activator;
});
