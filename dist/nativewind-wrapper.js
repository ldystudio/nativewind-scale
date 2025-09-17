"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativewindWrapper = NativewindWrapper;
const nativewind_1 = require("nativewind");
const react_1 = require("react");
const react_native_1 = require("react-native");
const scale_1 = require("./scale");
const scale_variables_1 = require("./scale-variables");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
function NativewindWrapper({ children, config }) {
    const insets = (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    const variables = (0, react_1.useMemo)(() => {
        return Object.entries(scale_variables_1.scaleVariables).map(([key, value]) => {
            const name = key.replace('var(--scale-', '').replace(')', '');
            if (name.startsWith('y')) {
                return [`--scale-${name}`, (0, scale_1.scale)(value)];
            }
            return [`--scale-${name}`, (0, scale_1.scale)(value)];
        });
    }, [config]);
    return (<react_native_1.View style={[
            { flex: 1 },
            (0, nativewind_1.vars)({
                ...Object.fromEntries(variables),
                '--screen-width': react_native_1.Dimensions.get('screen').width,
                '--screen-height': react_native_1.Dimensions.get('screen').height,
                '--edge-t': insets.top,
                '--edge-b': insets.bottom,
                '--edge-l': insets.left,
                '--edge-r': insets.right,
            }),
        ]}>
            {children}
        </react_native_1.View>);
}
