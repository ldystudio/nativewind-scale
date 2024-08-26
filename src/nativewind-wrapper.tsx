import { vars } from 'nativewind';
import resolveConfig from 'tailwindcss/resolveConfig';
import { PropsWithChildren, useMemo } from 'react';
import { View } from 'react-native';

import { scaleX, scaleY } from './scale';
import { Config } from 'tailwindcss';
import { scaleVariables } from './scale-variables';

type NativeWindWrapperProps = PropsWithChildren<{
  config: Config
}>;

export function NativewindWrapper({
  children,
  config
}: NativeWindWrapperProps) {
  const variables = useMemo(()=> {
    return Object.entries(scaleVariables).map(([key, value]) => {
      const name = key.replace('var(--scale-', '').replace(')', '')
      
      if (name.startsWith('y')) {
        return [`--scale-${name}`, scaleY(value)] as const
      }
      
      return [`--scale-${name}`, scaleX(value)] as const
    })
  }, [config])

  return (
    <View
      style={[ { flex: 1 }, vars(Object.fromEntries(variables)) ]}>
      {children}
    </View>
  );
}
