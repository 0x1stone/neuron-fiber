var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./modules/neuron-net", "./modules/neuron-layer", "./modules/activator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const neuron_net_1 = __importDefault(require("./modules/neuron-net"));
    exports.NeuronNet = neuron_net_1.default;
    const neuron_layer_1 = __importDefault(require("./modules/neuron-layer"));
    exports.NeuronLayer = neuron_layer_1.default;
    const activator_1 = __importDefault(require("./modules/activator"));
    exports.Activator = activator_1.default;
});
