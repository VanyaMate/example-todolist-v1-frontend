import React, { useCallback, useEffect, useState } from 'react';
import css from './collapse.module.scss';
import Theme from '../../containers/theme/theme.component';
import { Collapse as AntdCollapse } from 'antd';


export interface ICollapseProps extends React.HTMLAttributes<HTMLDivElement> {
    opened?: boolean | undefined;
    label: React.ReactNode;
    dep?: any[];
}

const Collapse: React.FC<ICollapseProps> = (props) => {
    const [ opened, setOpened ] = useState<boolean>(props.opened ?? false);

    const toggle = useCallback(() => {
        setOpened((o) => !o);
    }, [ setOpened ]);

    useEffect(() => {
        setOpened(props.opened ?? false);
    }, [ props.opened, ...(props.dep ?? []) ]);

    return (
        <Theme css={ css }>
            <AntdCollapse
                className={ css.collapse }
                ghost
                activeKey={ opened ? 1 : 0 }
                defaultActiveKey={ opened ? 1 : 0 }
                onChange={ toggle }
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