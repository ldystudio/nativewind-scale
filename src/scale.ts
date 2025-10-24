import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

export class ScaleReference {
    static width = 375;
    static height = 667;
}

export const scale = (size: number) => {
    'worklet';

    return PixelRatio.roundToNearestPixel(
        Math.min(shortDimension / ScaleReference.width, longDimension / ScaleReference.height) *
            size
    );
};
