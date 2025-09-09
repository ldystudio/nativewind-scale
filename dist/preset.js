"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scale_var_1 = require("./scale-var");
const space = 4;
const spacing = [...new Array(100).keys()].flatMap((i) => [
    i, ...i < 20 ? [i + 0.5] : []
]);
const spacingX = Object.fromEntries(spacing.map((s) => [s, (0, scale_var_1.scaleVar)(s * space, 'x')]));
const spacingY = Object.fromEntries(spacing.map((s) => [s, (0, scale_var_1.scaleVar)(s * space, 'y')]));
const combinedSpacing = {
    ...Object.fromEntries(spacing.map((s) => [s, (0, scale_var_1.scaleVar)(s * space)])),
    px: '1px',
    0: '0px',
    0.5: (0, scale_var_1.scaleVar)(2),
    'screen-x': 'var(--screen-width)',
    'screen-y': 'var(--screen-height)',
    'edge-t': 'var(--edge-top)',
    'edge-b': 'var(--edge-bottom)',
};
exports.default = {
    theme: {
        spacing: combinedSpacing,
        spacingX: {
            ...spacingX,
            screen: 'var(--screen-width)',
        },
        spacingY: {
            ...spacingY,
            screen: 'var(--screen-height)',
            'edge-t': 'var(--edge-top)',
            'edge-b': 'var(--edge-bottom)',
        },
        fontSize: {
            xxs: (0, scale_var_1.scaleVar)(10),
            xs: (0, scale_var_1.scaleVar)(12),
            sm: (0, scale_var_1.scaleVar)(14),
            base: (0, scale_var_1.scaleVar)(16),
            lg: (0, scale_var_1.scaleVar)(18),
            xl: (0, scale_var_1.scaleVar)(20),
            '2xl': (0, scale_var_1.scaleVar)(24),
            '3xl': (0, scale_var_1.scaleVar)(30),
            '4xl': (0, scale_var_1.scaleVar)(36),
            '5xl': (0, scale_var_1.scaleVar)(48),
            '6xl': (0, scale_var_1.scaleVar)(60),
            '7xl': (0, scale_var_1.scaleVar)(72),
            '8xl': (0, scale_var_1.scaleVar)(96),
            '9xl': (0, scale_var_1.scaleVar)(128),
        },
    }
};
