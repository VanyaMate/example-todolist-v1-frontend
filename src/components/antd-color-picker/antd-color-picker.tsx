import Theme from '../ui/containers/theme/theme.component';
import css from './antd-color-picker.module.scss';
import { ColorPicker } from 'antd';
import { IUseAntdColorPicker } from '../../hooks/use-antd-color-picker.hook';
import React from 'react';


export interface IAntdColorPickerProps {
    hook: IUseAntdColorPicker;
}

const AntdColorPicker: React.FC<IAntdColorPickerProps> = (props: IAntdColorPickerProps) => {
    return (
        <Theme css={ css }>
            <ColorPicker { ...props.hook }/>
        </Theme>
    );
};

export default AntdColorPicker;