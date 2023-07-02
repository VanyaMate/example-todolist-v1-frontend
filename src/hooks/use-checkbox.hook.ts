import React, {useMemo, useState} from "react";

export interface IUseCheckbox {
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>
}

export const useCheckbox = function (status: boolean, onChange: (value: boolean) => void): IUseCheckbox {
    const [state, setState] = useState<boolean>(status);
    return useMemo(() => {
        onChange(state);
        return {
            status: state,
            setStatus: setState,
        }
    }, [state])
}