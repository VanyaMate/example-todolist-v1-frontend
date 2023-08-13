import React, { useCallback, useEffect, useState } from 'react';


export interface IUseAntdInputProps {
    maxLength: number;
    showCount?: boolean;
    placeholder?: string;
    initialState?: string;
}

export interface IUseAntdInput {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    initialState: string;
    value: string;
}

export const useAntdInput = function (props: IUseAntdInputProps): IUseAntdInput {
    const [ value, setValue ] = useState<string>(props.initialState ?? '');
    const onChange            = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
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