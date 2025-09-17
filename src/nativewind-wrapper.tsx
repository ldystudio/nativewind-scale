import { vars } from 'nativewind';
import { PropsWithChildren, useMemo } from 'react';
import { Dimensions, View } from 'react-native';

import { scale } from './scale';
import { Config } from 'tailwindcss';
import { scaleVariables } from './scale-variables';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type NativeWindWrapperProps = PropsWithChildren<{
    config: Config;
}>;

export function NativewindWrapper({ children, config }: NativeWindWrapperProps) {
    const insets = useSafeAreaInsets();
    const variables = useMemo(() => {
        return Object.entries(scaleVariables).map(([key, value]) => {
            const name = key.replace('var(--scale-', '').replace(')', '');

            if (name.startsWith('y')) {
                return [`--scale-${name}`, scale(value)] as const;
            }

            return [`--scale-${name}`, scale(value)] as const;
        });
    }, [config]);

    return (
        <View
            style={[
                { flex: 1 },
                vars({
                    ...Object.fromEntries(variables),
                    '--screen-width': Dimensions.get('screen').width,
                    '--screen-height': Dimensions.get('screen').height,
                    '--edge-t': insets.top,
                    '--edge-b': insets.bottom,
                    '--edge-l': insets.left,
                    '--edge-r': insets.right,
                }),
            ]}
        >
            {children}
        </View>
    );
}
