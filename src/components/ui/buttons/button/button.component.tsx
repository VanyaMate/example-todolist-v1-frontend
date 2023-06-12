import css from './button.module.scss';
import Theme from "../../containers/theme/theme.component";
import React from "react";

const Button: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <Theme css={css} {...props}/>
    );
};

export default Button;