declare const _default: {
    theme: {
        spacing: {};
        spacingX: {
            [k: string]: string;
        };
        spacingY: {
            [k: string]: string;
        };
        borderSpacing: {};
        gap: {};
        height: {};
        inset: {};
        maxHeight: {};
        maxWidth: {};
        minHeight: {};
        minWidth: {};
        padding: {};
        margin: {};
        scrollMargin: {};
        scrollPadding: {};
        width: {};
        size: {};
        fontSize: {};
        lineHeight: {
            xs: string;
            sm: string;
            base: string;
            lg: string;
            xl: string;
            '2xl': string;
            '3xl': string;
            '4xl': string;
            '5xl': string;
            '6xl': string;
            '7xl': string;
            '8xl': string;
            '9xl': string;
        };
    };
    plugins: {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config>;
    }[];
};
export default _default;
