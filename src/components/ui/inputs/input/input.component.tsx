import React from "react";
import {IUseInput} from "../../../../hooks/use-input.hook";
import {useSlice} from "../../../../hooks/redux/use-store.hook";
import {cn} from "../../../../helpers/react.helper";
import _css from './input.module.scss';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hook: IUseInput<string>,
    css?: { [key: string]: string },
}

const Input: React.FC<IInputProps> = (props) => {
    const { hook, className, css, ...other } = props;
    const themeStore = useSlice((state) => state.theme);
    return (
        <input
            {...other}
            value={hook.value}
            onChange={(e) => hook.setValue(e.target.value)}
            className={cn(className, (css ?? _css)['container'], (css ?? _css)[themeStore.theme])}
        />
    );
};

export default Input;