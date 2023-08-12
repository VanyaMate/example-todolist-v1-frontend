import React from 'react';
import css from './collapse.module.scss';
import Theme from '../../containers/theme/theme.component';
import { Collapse as AntdCollapse } from 'antd';


export interface ICollapseProps extends React.HTMLAttributes<HTMLDivElement> {
    opened?: boolean | undefined;
    label: React.ReactNode;
}

const Collapse: React.FC<ICollapseProps> = (props) => {
    return (
        <Theme css={ css }>
            <AntdCollapse
                className={ css.collapse }
                ghost
                defaultActiveKey={ props.opened ? 1 : 0 }
                items={ [
                    {
                        key     : 1,
                        label   : props.label,
                        children: props.children,
                    },
                ] }
            />
        </Theme>
    );
};

export default React.memo(Collapse);