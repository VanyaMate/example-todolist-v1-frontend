import React, {useCallback} from "react";
import css from './checkbox.module.scss';
import {cn} from "../../../../helpers/react.helper";
import Theme from "../../containers/theme/theme.component";
import {IUseCheckbox} from "../../../../hooks/use-checkbox.hook";

export interface ICheckboxProps {
    hook: IUseCheckbox
}

const Checkbox: React.FC<ICheckboxProps> = (props) => {
    const toggle = useCallback(() => {
        props.hook.setStatus((prev) => !prev);
    }, [])

    return (
        <Theme
            css={css}
            className={cn(props.hook.status ? css.active : undefined)}
            onClick={toggle}
        />
    );
};

export default Checkbox;