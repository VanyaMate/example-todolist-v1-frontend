import React, {useEffect, useState} from "react";

export interface IUseSelectItem {
    value: any;
    title: string;
}

export interface IUseSelectProps {
    options: IUseSelectItem[];
    default?: IUseSelectItem;
}

export interface IUseSelect {
    options: IUseSelectItem[],
    default?: IUseSelectItem,
    value: string,
    onChange: React.ChangeEventHandler<HTMLSelectElement>,
}

export const useSelect = function (props: IUseSelectProps): IUseSelect {
    const [value, setValue] = useState<string>(props.default?.value ?? props.options[0].value);
    const onChange: React.ChangeEventHandler<HTMLSelectElement> = function (e: React.ChangeEvent<HTMLSelectElement>) {
        const value: string = e.target.value;
        setValue(value);
    }

    useEffect(() => {
        setValue(props.default?.value ?? props.options[0].value);
    }, [props.default])

    console.log(value, props.default);

    return {
        ...props,
        value,
        onChange,
    };
}