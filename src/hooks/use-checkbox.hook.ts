import React, {useMemo, useState} from "react";

export interface IUseCheckbox {
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>
}

export const useCheckbox = function (status: boolean): IUseCheckbox {
    const [state, setState] = useState<boolean>(status);
    return useMemo(() => ({
        status: state,
        setStatus: setState,
    }), [state])
}