import React, { HTMLAttributeAnchorTarget, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Theme from '../../../ui/containers/theme/theme.component';
import HoverBox from '../../../ui/containers/hover-box/hover-box';
import Row from '../../../ui/containers/row/row.component';
import css from './color-link.module.scss';


export interface ILinkColorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    color: string;
    href: string;
    title: string;
    target?: HTMLAttributeAnchorTarget;
}

const LinkColor: React.FC<ILinkColorProps> = (props) => {
    const location = useLocation();
    const active   = useMemo(() => location.pathname === props.href, [ location.pathname ]);

    return (
        <Theme css={ css }>
            <Link to={ props.href }
                  target={ props.target ?? '_self' }
                  className={ css.link }
            >
                <HoverBox className={ active ? css.active : '' }>
                    <Row offset={ 10 }
                         className={ css.row }
                    >
                        <div className={ css.color }
                             style={ { backgroundColor: props.color } }
                        />
                        <div>{ props.title }</div>
                    </Row>
                </HoverBox>
            </Link>
        </Theme>
    );
};

export default LinkColor;