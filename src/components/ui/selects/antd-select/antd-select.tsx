import React from 'react';
import { IUseAntdSelect } from '../../../../hooks/use-antd-select.hook';
import Theme from '../../containers/theme/theme.component';
import css from './antd-select.module.scss';
import { Select } from 'antd';


export interface IAntdSelectProps {
    hook: IUseAntdSelect;
}

const AntdSelect: React.FC<IAntdSelectProps> = (props: IAntdSelectProps) => {
    const { ...other } = props.hook;

    return (
        <Theme css={ css }>
            <Select
                className={ css.select }
                { ...other }
                size={ 'large' }
            />
        </Theme>
    );
};

export default AntdSelect;