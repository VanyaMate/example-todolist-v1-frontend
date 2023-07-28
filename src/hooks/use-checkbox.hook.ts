import React, { useEffect, useMemo, useState } from 'react';


export interface IUseCheckbox {
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useCheckbox = function (status: boolean, onChange: (value: boolean) => void, deps: any[] = []): IUseCheckbox {
    const [ state, setState ]   = useState<boolean>(status);
    const [ inited, setInited ] = useState<boolean>(false);

    /**
     *  TODO: Временное решение.
     *  Проблема в том, что если будет несколько checkpoint с разными
     *  onChange - они будут срабатывать все при изменении status
     *  (ссылающихся на один и тот же объект)
     */
    useEffect(() => {
        setState(status);
    }, [status])

    useEffect(() => {
        inited && onChange(state);
        !inited && setInited(true);
    }, [ state ]);

    return useMemo(() => {
        return {
            status   : state,
            setStatus: setState,
        };
    }, [ state, ...deps ]);
};