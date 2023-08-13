import { Color } from 'antd/lib/color-picker';
import { useCallback, useEffect, useState } from 'react';


export interface IUseAntdColorPickerProps {
    showText?: boolean;
    size?: 'large' | 'middle' | 'small';
    initialValue?: string;
}

export interface IUseAntdColorPicker extends IUseAntdColorPickerProps {
    value: string;
    onChange: (color: Color, hex: string) => void;
}

export const useAntdColorPicker = function (props: IUseAntdColorPickerProps): IUseAntdColorPicker {
    const [ value, setValue ] = useState<string>(props.initialValue ?? '#FFFFFF');

    const onChange = useCallback<(color: Color, hex: string) => void>((_: Color, hex: string): void => {
        setValue(hex);
    }, [ setValue ]);

    useEffect(() => {
        setValue(props.initialValue ?? '#FFFFFF');
    }, [ props.initialValue ]);

    return {
        value, onChange, ...props,
    };
};