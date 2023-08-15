import dayjs from 'dayjs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { gft } from '../helpers/string.helper';


export type TimePickerOnChange = (time: dayjs.Dayjs | null, timeString: string) => void;

export interface IUseAntdTimePickerProps {
    defaultValue?: string;
    disabled?: boolean;
}

export interface IUseAntdTimePicker {
    onChange: TimePickerOnChange,
    value: dayjs.Dayjs | undefined,
    defaultStringValue: string,
    disabled?: boolean;
}


export const useAntdTimePicker = function (props: IUseAntdTimePickerProps): IUseAntdTimePicker {
    const date: string                                  = useMemo<string>(() => {
        const defaultDate: Date = props.defaultValue
                                  ? new Date(props.defaultValue) : new Date();

        if (!props.defaultValue) {
            defaultDate.setHours(0);
            defaultDate.setMinutes(0);
            defaultDate.setSeconds(0);
            defaultDate.setMilliseconds(0);
        }

        return `${ gft(defaultDate.getHours()) }:${ gft(defaultDate.getMinutes()) }:${ gft(defaultDate.getSeconds()) }`;
    }, [ props.defaultValue ]);
    const [ defaultValue, setDefaultValue ]             = useState<dayjs.Dayjs | undefined>(dayjs(date, 'HH-mm-ss'));
    const [ defaultStringValue, setDefaultStringValue ] = useState<string>(date);
    const onChange                                      = useCallback<TimePickerOnChange>((time: dayjs.Dayjs | null, timeString: string) => {
        setDefaultValue(time ?? undefined);
        setDefaultStringValue(timeString);
    }, [ setDefaultStringValue, setDefaultValue ]);

    useEffect(() => {
        setDefaultValue(dayjs(date, 'HH-mm-ss'));
        setDefaultStringValue(date);
    }, [ date ]);

    return {
        value   : defaultValue,
        defaultStringValue,
        onChange,
        disabled: props.disabled,
    };
};