import React from "react";
import Row from "../../ui/containers/row/row.component";
import {cn} from "../../../helpers/react.helper";
import css from './list-item.module.scss';
import Theme from "../../ui/containers/theme/theme.component";

export interface IListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: string;
    color?: string;
    text: string;
    count: number;
    active: boolean;
}

const ListItem: React.FC<IListItemProps> = (props) => {
    const { icon, color, text, count, active, className } = props;

    return (
        <Theme css={css} className={cn(className, active ? css.selected : undefined)}>
            <Row offset={10} className={css.row}>
                {
                    icon ?
                        <img src={icon} className={css.icon}/> :
                        <div style={{background: color}} className={css.icon}/>
                }
                <div className={css.text}>{ text }</div>
                <div className={cn(css.count, !!count ? undefined : css.hidden)}>{ count }</div>
            </Row>
        </Theme>
    );
};

export default ListItem;