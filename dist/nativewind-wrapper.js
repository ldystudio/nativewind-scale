"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativewindWrapper = NativewindWrapper;
const nativewind_1 = require("nativewind");
const react_1 = require("react");
const react_native_1 = require("react-native");
const scale_1 = require("./scale");
const scale_variables_1 = require("./scale-variables");
function NativewindWrapper({ children, config }) {
    const variables = (0, react_1.useMemo)(() => {
        return Object.entries(scale_variables_1.scaleVariables).map(([key, value]) => {
            const name = key.replace('var(--scale-', '').replace(')', '');
            if (name.startsWith('y')) {
                return [`--scale-${name}`, (0, scale_1.scaleY)(value)];
            }
            return [`--scale-${name}`, (0, scale_1.scaleX)(value)];
        });
    }, [config]);
    return (<react_native_1.View style={[{ flex: 1 }, (0, nativewind_1.vars)(Object.fromEntries(variables))]}>
      {children}
    </react_native_1.View>);
}
