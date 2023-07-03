import React, {useEffect, useMemo, useState} from "react";

export interface IUseCheckbox {
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>
}

export const useCheckbox = function (status: boolean, onChange: (value: boolean) => void): IUseCheckbox {
    const [state, setState] = useState<boolean>(status);
    const [inited, setInited] = useState<boolean>(false);

    useEffect(() => {
        inited && onChange(state);
        setInited(true);
    }, [state])

    return useMemo(() => {
        return {
            status: state,
            setStatus: setState,
        }
    }, [state])
}