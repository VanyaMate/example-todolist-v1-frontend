import css from './hover-box.module.scss';
import React from "react";
import Theme from "../theme/theme.component";

const HoverBox: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const {className, ...other} = props;
    return (
        <Theme css={css} className={className} {...other}/>
    );
};

export default HoverBox;