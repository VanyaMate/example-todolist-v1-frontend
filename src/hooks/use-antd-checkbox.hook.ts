import { useCallback, useEffect, useState } from 'react';
import { CheckboxChangeEvent } from 'antd/es/checkbox';


export interface IUseAntdCheckboxProps {
    label: string;
    value: boolean;
    dep?: any[];
}

export interface IUseAntdCheckbox extends IUseAntdCheckboxProps {
    onChange: (value: CheckboxChangeEvent) => void;
}

export const useAntdCheckbox = function (props: IUseAntdCheckboxProps): IUseAntdCheckbox {
    const [ value, setValue ] = useState<boolean>(props.value);

    const onChange = useCallback<(event: CheckboxChangeEvent) => void>((value: CheckboxChangeEvent) => {
        setValue(value.target.checked);
    }, [ setValue ]);

    useEffect(() => {
        setValue(props.value);
    }, [ props.value, ...(props.dep ?? []) ]);

    return {
        ...props,
        value,
        onChange,
    };
};