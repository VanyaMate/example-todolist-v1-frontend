import React from "react";
import css from './box.module.scss';
import {cn} from "../../../../helpers/react.helper";
import Theme from "../theme/theme.component";

const Box: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, ...other } = props;
    return (
        <Theme css={css} {...other} className={cn(className, css.container)}/>
    );
};

export default Box;