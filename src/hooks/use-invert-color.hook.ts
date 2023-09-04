import { useMemo } from 'react';
import {
    deconstructColor,
    IColorDeconstruct,
} from '@/hooks/use-color-deconstruct.hook';


export interface IColor {
    original: string;
    inverted: string;
    inverted_bw: string;
}

export const useInvertColor = function (color: string) {
    return useMemo<IColor>(() => {
        const invert                              = function (value: number): number {
            return 255 - value;
        };
        const convert                             = function (value: number): string {
            return value.toString(16);
        };
        const colorDeconstruct: IColorDeconstruct = deconstructColor(color);
        const cd: IColorDeconstruct               = colorDeconstruct;
        const invR: string                        = convert(invert(cd.rgb.r));
        const invG: string                        = convert(invert(cd.rgb.g));
        const invB: string                        = convert(invert(cd.rgb.b));
        const avg: number                         = (cd.rgb.r + cd.rgb.g + cd.rgb.b) / 3;
        const inverted: string                    = `#${ invR }${ invG }${ invB }`;

        return {
            original   : color,
            inverted   : inverted,
            inverted_bw: (avg > (255 / 2)) ? '#0F0F0F' : '#FAFAFA',
        };
    }, [ color ]);
};