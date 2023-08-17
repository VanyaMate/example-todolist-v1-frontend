import React from 'react';
import Theme from '../../containers/theme/theme.component';
import css from './antd-checkbox.module.scss';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { IUseAntdCheckbox } from '../../../../hooks/use-antd-checkbox.hook';


export interface IAntdCheckboxProps {
    hook: IUseAntdCheckbox;
}

const AntdCheckbox: React.FC<IAntdCheckboxProps> = (props) => {
    const { label, ...other } = props.hook;

    return (
        <Theme css={ css }>
            <Checkbox { ...other }
                      defaultChecked={ other.value }
                      checked={ other.value }
            >
                { label }
            </Checkbox>
        </Theme>
    );
};

export default AntdCheckbox;