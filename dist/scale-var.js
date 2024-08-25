"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleVar = exports.getScaleVariableName = void 0;
const getScaleVariableName = (value, type) => {
    return `var(--scale-${`${type}-`}${value})`;
};
exports.getScaleVariableName = getScaleVariableName;
const scaleVar = (value, type = 'x') => {
    if (value.toString().includes('.')) {
        return (0, exports.getScaleVariableName)(value.toString().split('.').join('_'), type);
    }
    return (0, exports.getScaleVariableName)(value.toString(), type);
};
exports.scaleVar = scaleVar;
