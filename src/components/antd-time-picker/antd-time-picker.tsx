import React from 'react';
import { IUseAntdTimePicker } from '../../hooks/use-antd-time-picker.hook';
import Theme from '../ui/containers/theme/theme.component';
import css from './antd-time-picker.module.scss';
import { TimePicker } from 'antd';


export interface IAntdTimePickerProps {
    hook: IUseAntdTimePicker;
}

const AntdTimePicker: React.FC<IAntdTimePickerProps> = (props) => {
    const { defaultStringValue, ...other } = props.hook;

    return (
        <Theme css={ css }>
            <TimePicker { ...other }
                        changeOnBlur={ true }
                        className={ css.timepicker }
                        size={ 'large' }
            />
        </Theme>
    );
};

export default AntdTimePicker;