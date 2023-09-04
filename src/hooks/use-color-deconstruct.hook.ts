import { useMemo } from 'react';


export interface IColorDeconstructRGB {
    r: number;
    g: number;
    b: number;
}

export interface IColorDeconstruct {
    rgb: IColorDeconstructRGB;
}

export const deconstructColor = function (colorHex: string): IColorDeconstruct {
    const rgb: IColorDeconstructRGB = {
        r: 0,
        g: 0,
        b: 0,
    };
    const [ _, ...color ]           = colorHex.split('');
    if (color.length === 3) {
        const [ r, g, b ] = color;
        rgb.r             = parseInt((r + r), 16);
        rgb.g             = parseInt((g + g), 16);
        rgb.b             = parseInt((b + b), 16);
    } else if (color.length === 6) {
        const [ r1, r2, g1, g2, b1, b2 ] = color;
        rgb.r                            = parseInt((r1 + r2), 16);
        rgb.g                            = parseInt((g1 + g2), 16);
        rgb.b                            = parseInt((b1 + b2), 16);
    }
    return {
        rgb,
    };
};

export const useColorDeconstruct = function (colorHex: string) {
    return useMemo<IColorDeconstruct>(() => deconstructColor(colorHex), [ colorHex ]);
};