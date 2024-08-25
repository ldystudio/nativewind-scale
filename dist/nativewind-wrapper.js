"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativewindWrapper = NativewindWrapper;
const resolveConfig_1 = __importDefault(require("tailwindcss/resolveConfig"));
const react_1 = require("react");
const react_native_1 = require("react-native");
// const scaleValue = (value: number, type?: 'x' | 'y') => {
//   if (type === 'x') {
//     return scaleX(value);
//   }
//   return scaleY(value);
// };
function NativewindWrapper({ children, config }) {
    const resolvedConfig = (0, react_1.useMemo)(() => {
        return (0, resolveConfig_1.default)(config);
    }, [config]);
    console.log(resolvedConfig);
    return (<react_native_1.View style={[
            { flex: 1 },
            // vars(
            //   // Object.fromEntries(
            //   //   (['x', 'y'] as const).flatMap((v) =>
            //   //     spacing.map((s) => [
            //   //       buildValue(s, v).replace('var(', '').replace(')', ''),
            //   //       scaleValue(s, v),
            //   //     ])
            //   //   )
            //   // )
            // ),
        ]}>
      {children}
    </react_native_1.View>);
}
