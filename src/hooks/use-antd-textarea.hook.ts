import React, { useCallback, useEffect, useState } from 'react';


export interface IUseAntdTextareaProps {
    maxLength: number;
    showCount?: boolean;
    placeholder?: string;
    initialState?: string;
}

export interface IUseAntdTextarea extends IUseAntdTextareaProps {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    initialState: string;
    value: string;
}

export const useAntdTextarea = function (props: IUseAntdTextareaProps): IUseAntdTextarea {
    const [ value, setValue ] = useState<string>(props.initialState ?? '');
    const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    }, [ setValue ]);

    useEffect(() => {
        setValue(props.initialState ?? '');
    }, [ props.initialState ]);

    return {
        initialState: value,
        onChange,
        ...props,
        value,
    };
};