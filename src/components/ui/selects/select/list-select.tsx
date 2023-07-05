import React, {useEffect, useState} from "react";
import {IUseSelect} from "../../../../hooks/use-select.hook";
import Theme from "../../containers/theme/theme.component";
import css from './select.module.scss';

interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    hook: IUseSelect
}

const ListSelect: React.FC<ISelectProps> = (props) => {
    const [id, setId] = useState<number>(Number(props.hook.value));

    useEffect(() => {
        setId(Number(props.hook.value));
    }, [props.hook.value])

    return (
        <Theme css={css}>
            <select
                onChange={props.hook.onChange}
                value={id}
            >
                {
                    [{ value: 0, title: 'No list'}].concat(props.hook.options).map((option) =>
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.title}
                        </option>
                    )
                }
            </select>
        </Theme>
    );
};

export default ListSelect;