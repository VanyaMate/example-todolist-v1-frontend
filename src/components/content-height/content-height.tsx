import css from './content-height.module.scss';
import React from "react";
import {cn} from "../../helpers/react.helper";

const ContentHeight: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, ...other } = props;
    return (
        <div className={cn(css.container, className)} {...other}/>
    );
};

export default ContentHeight;