import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { spacing } from './spacing';
export { NativewindWrapper } from './nativewind-wrapper';

export default {
  theme: {
    ...spacing,
    borderSpacing: {},
    gap: {},
    height: {},
    inset: {},
    maxHeight: {},
    maxWidth: {},
    minHeight: {},
    minWidth: {},
    padding: {},
    margin: {},
    scrollMargin: {},
    scrollPadding: {},
    width: {},
    size: {},
    fontSize: {
      xs: ['var(--scale-x-10_5)', { lineHeight: '14px' }],
      sm: ['12.25px', { lineHeight: '17.5px' }],
      base: ['14px', { lineHeight: '21px' }],
      lg: ['15.75px', { lineHeight: '24.5px' }],
      xl: ['17.5px', { lineHeight: '24.5px' }],
      '2xl': ['21px', { lineHeight: '28px' }],
      '3xl': ['26.25px', { lineHeight: '31.5px' }],
      '4xl': ['31.5px', { lineHeight: '35px' }],
      '5xl': ['42px', { lineHeight: '42px' }],
      '6xl': ['52.5px', { lineHeight: '52.5px' }],
      '7xl': ['63px', { lineHeight: '63px' }],
      '8xl': ['84px', { lineHeight: '84px' }],
      '9xl': ['112px', { lineHeight: '112px' }],
      // xs: ['var(--scale-x-10_5)  10.5px', { lineHeight: '14px' }],
      // sm: ['12.25px', { lineHeight: '17.5px' }],
      // base: ['14px', { lineHeight: '21px' }],
      // lg: ['15.75px', { lineHeight: '24.5px' }],
      // xl: ['17.5px', { lineHeight: '24.5px' }],
      // '2xl': ['21px', { lineHeight: '28px' }],
      // '3xl': ['26.25px', { lineHeight: '31.5px' }],
      // '4xl': ['31.5px', { lineHeight: '35px' }],
      // '5xl': ['42px', { lineHeight: '42px' }],
      // '6xl': ['52.5px', { lineHeight: '52.5px' }],
      // '7xl': ['63px', { lineHeight: '63px' }],
      // '8xl': ['84px', { lineHeight: '84px' }],
      // '9xl': ['112px', { lineHeight: '112px' }],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      const spacingX = theme('spacingX') as Record<string, string>;
      const spacingY = theme('spacingY') as Record<string, string>;
      const modifiers = ['responsive', 'hover'] as any;

      matchUtilities(
        {
          gap: (value) => ({ gap: value }),
          [`gap-x`]: (value) => ({ columnGap: value }),
        },
        {
          values: spacingX,
          modifiers,
        }
      );

      matchUtilities(
        {
          [`gap-y`]: (value) => ({ rowGap: value }),
        },
        {
          values: spacingY,
          modifiers: modifiers,
        }
      );

      matchUtilities(
        {
          height: (value) => ({ height: value }),
        },
        {
          values: {
            auto: 'auto',
            ...spacingY,
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            full: '100%',
          },
          modifiers,
        }
      );

      matchUtilities(
        {
          m: (value) => ({ margin: value }),
          ml: (value) => ({ marginLeft: value }),
          mr: (value) => ({ marginRight: value }),
          mx: (value) => ({ marginLeft: value, marginRight: value }),
          p: (value) => ({ padding: value }),
          pl: (value) => ({ paddingLeft: value }),
          pr: (value) => ({ paddingRight: value }),
          px: (value) => ({ paddingLeft: value, paddingRight: value }),
        },
        {
          values: { ...spacingX, auto: 'auto' },
          modifiers,
          type: 'position',
        }
      );

      matchUtilities(
        {
          mt: (value) => ({ marginTop: value }),
          mb: (value) => ({ marginBottom: value }),
          my: (value) => ({ marginTop: value, marginBottom: value }),
          pt: (value) => ({ paddingTop: value }),
          pb: (value) => ({ paddingBottom: value }),
          py: (value) => ({ paddingTop: value, paddingBottom: value }),
        },
        {
          values: { ...spacingY, auto: 'auto' },
          modifiers,
          type: 'position',
        }
      );

      matchUtilities(
        {
          [`min-h`]: (value) => ({ minHeight: value }),
          [`max-h`]: (value) => ({ maxHeight: value }),
        },
        {
          values: { ...spacingY, auto: 'auto', full: '100%' },
          modifiers,
          type: 'absolute-size',
        }
      );

      matchUtilities(
        {
          [`w`]: (value) => ({ width: value }),
          [`min-w`]: (value) => ({ minWidth: value }),
          [`max-w`]: (value) => ({ maxWidth: value }),
          [`size`]: (value) => ({ width: value, height: value }),
        },
        {
          values: {
            ...spacingX,
            auto: 'auto',
            xs: '20rem',
            sm: '24rem',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            '7xl': '80rem',
            full: '100%',
          },
          modifiers,
          type: 'absolute-size',
        }
      );

      return;
    }),
  ],
} satisfies Partial<Config>
