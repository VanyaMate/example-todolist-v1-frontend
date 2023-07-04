import {Link} from "react-router-dom";
import ListItem, {IListItemProps} from "../list-item/list-item.component";
import {cn} from "../../../helpers/react.helper";
import React from "react";
import css from './link-list-item.module.scss';

interface ILinkListItemProps extends IListItemProps {
    to: string;
}

const LinkListItem: React.FC<ILinkListItemProps> = (props) => {
    const {to, className, ...other} = props;

    return (
        <Link to={to} className={cn(className, css.container)}>
            <ListItem {...other}/>
        </Link>
    );
};

export default LinkListItem;