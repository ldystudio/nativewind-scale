"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleY = exports.scaleX = exports.ScaleReference = void 0;
const react_native_1 = require("react-native");
const { width, height } = react_native_1.Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];
class ScaleReference {
    static width = 375;
    static height = 812;
}
exports.ScaleReference = ScaleReference;
const scaleX = (size) => {
    'worklet';
    return (shortDimension / ScaleReference.width) * size;
};
exports.scaleX = scaleX;
const scaleY = (size) => {
    'worklet';
    return (longDimension / ScaleReference.height) * size;
};
exports.scaleY = scaleY;
