"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleVar = exports.getScaleVariableName = void 0;
const scale_variables_1 = require("./scale-variables");
const getScaleVariableName = (value, type, num) => {
    const name = `var(--scale-${`${type}-`}${value})`;
    if (!scale_variables_1.scaleVariables[name]) {
        scale_variables_1.scaleVariables[name] = num;
    }
    return name;
};
exports.getScaleVariableName = getScaleVariableName;
const scaleVar = (value, type = 'x') => {
    if (value.toString().includes('.')) {
        return (0, exports.getScaleVariableName)(value.toString().split('.').join('_'), type, value);
    }
    return (0, exports.getScaleVariableName)(value.toString(), type, value);
};
exports.scaleVar = scaleVar;
