import { PropsWithChildren } from 'react';
import { Config } from 'tailwindcss';
type NativeWindWrapperProps = PropsWithChildren<{
    config: Config;
}>;
export declare function NativewindWrapper({ children, config }: NativeWindWrapperProps): import("react").JSX.Element;
export {};
