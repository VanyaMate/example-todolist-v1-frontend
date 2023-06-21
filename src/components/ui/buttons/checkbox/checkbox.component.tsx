import {useCallback, useState} from "react";
import css from './checkbox.module.scss';
import {cn} from "../../../../helpers/react.helper";
import Theme from "../../containers/theme/theme.component";

export interface ICheckboxProps {
    active: boolean;
}

const Checkbox: React.FC<ICheckboxProps> = (props) => {
    const [state, setState] = useState<boolean>(props.active);

    const toggle = useCallback(() => {
        setState((prev) => !prev);
    }, [])

    return (
        <Theme
            css={css}
            className={cn(state ? css.active : undefined)}
            onClick={toggle}
        />
    );
};

export default Checkbox;