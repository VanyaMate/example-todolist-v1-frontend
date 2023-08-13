import React from 'react';
import { Input } from 'antd';
import { IUseAntdInput } from '../../../../hooks/use-antd-input.hook';
import Theme from '../../containers/theme/theme.component';
import css from './antd-input.module.scss';


export interface IAntdInputProps {
    hook: IUseAntdInput;
}

const AntdInput: React.FC<IAntdInputProps> = (props) => {

    return (
        <Theme css={ css }>
            <Input { ...props.hook }/>
        </Theme>
    );
};

export default AntdInput;