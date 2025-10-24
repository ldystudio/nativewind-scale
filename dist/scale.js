"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scale = exports.ScaleReference = void 0;
const react_native_1 = require("react-native");
const { width, height } = react_native_1.Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];
class ScaleReference {
    static width = 375;
    static height = 667;
}
exports.ScaleReference = ScaleReference;
const scale = (size) => {
    'worklet';
    return react_native_1.PixelRatio.roundToNearestPixel(Math.min(shortDimension / ScaleReference.width, longDimension / ScaleReference.height) *
        size);
};
exports.scale = scale;
