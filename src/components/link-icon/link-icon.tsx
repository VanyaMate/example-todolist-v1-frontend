import React, {HTMLAttributeAnchorTarget} from "react";
import {Link} from "react-router-dom";
import Icon from "../icon/icon";
import Row from "../ui/containers/row/row.component";
import css from './link-icon.module.scss';
import Theme from "../ui/containers/theme/theme.component";
import HoverBox from "../ui/containers/hover-box/hover-box";

export interface ILinkIconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon: string;
    href: string;
    title: string;
    target?: HTMLAttributeAnchorTarget;
}

const LinkIcon: React.FC<ILinkIconProps> = (props) => {
    return (
        <Theme css={css}>
            <Link to={props.href} target={props.target ?? '_self'} className={css.link}>
                <HoverBox>
                    <Row offset={10} className={css.row}>
                        <Icon size={14} src={props.icon} className={css.icon}/>
                        <div>{props.title}</div>
                    </Row>
                </HoverBox>
            </Link>
        </Theme>
    );
};

export default LinkIcon;