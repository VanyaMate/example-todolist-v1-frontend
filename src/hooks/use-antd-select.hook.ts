import { useCallback, useEffect, useState } from 'react';


export type UseAntdSelectOption = {
    value: string;
    label: string;
}

export interface IUseAntdSelectProps {
    options: UseAntdSelectOption[];
    defaultValue?: string;
    allowClear?: boolean;
    placeholder?: string;
}

export interface IUseAntdSelect extends IUseAntdSelectProps {
    value: string | undefined;
    onChange: (value: string) => void;
}

export const useAntdSelect = function (props: IUseAntdSelectProps): IUseAntdSelect {
    const [ value, setValue ] = useState<string | undefined>(props.defaultValue);

    useEffect(() => {
        setValue(props.defaultValue);
    }, [ props.options, props.defaultValue ]);

    const onChange = useCallback<(value: string) => void>((value: string) => {
        setValue(value);
    }, [ setValue ]);

    return {
        onChange,
        ...props,
        value,
    };
};