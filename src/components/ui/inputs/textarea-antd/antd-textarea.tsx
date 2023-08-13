import React from 'react';
import { Input } from 'antd';
import { IUseAntdTextarea } from '../../../../hooks/use-antd-textarea.hook';
import Theme from '../../containers/theme/theme.component';
import css from './antd-textarea.module.scss';


export interface IAntdTextareaProps {
    hook: IUseAntdTextarea;
}

const AntdTextarea: React.FC<IAntdTextareaProps> = (props) => {
    return (
        <Theme css={ css }>
            <Input.TextArea
                className={ css.ant }
                { ...props.hook }
                autoSize={ { minRows: 2, maxRows: 10 } }
            />
        </Theme>
    );
};

export default AntdTextarea;