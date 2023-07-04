import React from "react";
import {cn} from "../../helpers/react.helper";
import css from './title-box.module.scss';

export interface ITitleBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
}

const TitleBox: React.FC<ITitleBoxProps> = (props) => {
    const {className, title, ...other} = props;
    return (
        <h2 className={cn(className, css.container)} {...other}>{title}</h2>
    );
};

export default TitleBox;