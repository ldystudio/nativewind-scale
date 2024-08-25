"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spacing = void 0;
const scale_var_1 = require("./scale-var");
const values = [
    0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,
    9.5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 28, 32, 36, 40, 44, 48,
    52, 56, 60, 64, 72, 80, 96,
];
exports.spacing = {
    spacing: {},
    spacingX: Object.fromEntries(values.map((s) => [s, (0, scale_var_1.scaleVar)(s, 'x')])),
    spacingY: Object.fromEntries(values.map((s) => [s, (0, scale_var_1.scaleVar)(s, 'y')])),
};
