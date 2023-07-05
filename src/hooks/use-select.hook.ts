import React, {useCallback, useEffect, useMemo, useState} from "react";

export interface IUseSelectItem {
    value: any;
    title: string;
}

export interface IUseSelectProps {
    options:    IUseSelectItem[];
    default?:   any;
}

export interface IUseSelect {
    options:    IUseSelectItem[],
    default?:   IUseSelectItem,
    value:      number,
    onChange:   React.ChangeEventHandler<HTMLSelectElement>,
}

type selectOnChange = React.ChangeEventHandler<HTMLSelectElement>;

export const useSelect = function (props: IUseSelectProps): IUseSelect {
    const [value, setValue] =           useState<number>(props.default ?? props.options[0].value);
    const onChange: selectOnChange =    useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
                                            const value: string = e.target.value;
                                            setValue(Number(value));
                                        }, [value]);

    useEffect(() => {
        setValue(props.default ?? props.options[0].value);
    }, [props.default])

    return useMemo(() => ({
        ...props,
        value,
        onChange,
    }), [value]);
}