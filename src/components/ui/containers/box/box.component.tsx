import React from "react";
import _css from './box.module.scss';
import {cn} from "../../../../helpers/react.helper";
import Theme, {CssProps} from "../theme/theme.component";

interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    css: CssProps
}

const Box: React.FC<IBoxProps> = (props) => {
    const { className, css, ...other } = props;
    return (
        <Theme css={css} {...other} className={cn(className, _css.container)}/>
    );
};

export default Box;