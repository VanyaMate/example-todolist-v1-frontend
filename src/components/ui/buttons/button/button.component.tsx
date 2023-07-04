import css from './button.module.scss';
import Theme from "../../containers/theme/theme.component";
import React from "react";
import {cn} from "../../../../helpers/react.helper";

export interface IButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    active?: boolean;
    loading?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
    const { className, active, loading, ...other } = props;
    return (
        <Theme css={css} {...other} className={cn(
            className,
            active ? css.active : undefined,
            loading ? css.loading : undefined,
        )}/>
    );
};

export default Button;