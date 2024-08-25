import { vars } from 'nativewind';
import resolveConfig from 'tailwindcss/resolveConfig';
import { PropsWithChildren, useMemo } from 'react';
import { View } from 'react-native';

import { scaleX, scaleY } from './scale';
import { Config } from 'tailwindcss';

type NativeWindWrapperProps = PropsWithChildren<{
  config: Config
}>;

// const scaleValue = (value: number, type?: 'x' | 'y') => {
//   if (type === 'x') {
//     return scaleX(value);
//   }

//   return scaleY(value);
// };

export function NativewindWrapper({
  children,
  config
}: NativeWindWrapperProps) {
  const resolvedConfig = useMemo(()=> {
    return resolveConfig(config)
  }, [config])

  console.log(resolvedConfig)

  return (
    <View
      style={[
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
    </View>
  );
}
