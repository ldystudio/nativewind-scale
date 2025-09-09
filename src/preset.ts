import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { scaleVar } from './scale-var';


const space = 4
const spacing = [...new Array(100).keys()].flatMap((i) => [
  i, ...i < 20 ? [i + 0.5] : []
])

const spacingX = Object.fromEntries(spacing.map((s) => [s, scaleVar(s * space, 'x')]));
const spacingY = Object.fromEntries(spacing.map((s) => [s, scaleVar(s * space, 'y')]));

const combinedSpacing = {
  ...Object.fromEntries(spacing.map((s) => [s, scaleVar(s * space)])),

  px: '1px',
  0: '0px',
  0.5: scaleVar(2),

  'screen-x': 'var(--screen-width)',
  'screen-y': 'var(--screen-height)',
  'edge-t': 'var(--edge-top)',
  'edge-b': 'var(--edge-bottom)',
};


export default {
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
      xxs: scaleVar(10),
      xs: scaleVar(12),
      sm: scaleVar(14),
      base: scaleVar(16),
      lg: scaleVar(18),
      xl: scaleVar(20),
      '2xl': scaleVar(24),
      '3xl': scaleVar(30),
      '4xl': scaleVar(36),
      '5xl': scaleVar(48),
      '6xl': scaleVar(60),
      '7xl': scaleVar(72),
      '8xl': scaleVar(96),
      '9xl': scaleVar(128),
    },
  }
} satisfies Partial<Config>
