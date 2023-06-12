import css from './button.module.scss';
import Theme from "../../containers/theme/theme.component";
import React from "react";
import {cn} from "../../../../helpers/react.helper";

interface IButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    active?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
    const { className, active, ...other } = props;
    return (
        <Theme css={css} {...other} className={cn(className, active ? css.active : undefined)}/>
    );
};

export default Button;