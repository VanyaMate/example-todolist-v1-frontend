import {useAuth} from "./use-auth.hook";
import {useEffect, useState} from "react";
import {useSlice} from "./redux/use-store.hook";

export interface IUseRefreshAfterReloading {
    refreshed: boolean;
    login: string | null;
}

export const useRefreshAfterReloading = function (): IUseRefreshAfterReloading {
    const authStore =                   useSlice((state) => state.auth);
    const { refresh } =                 useAuth();
    const [refreshed, setRefreshed] =   useState<boolean>(!authStore.login);

    useEffect(() => {
        if (!refreshed && authStore.login) {
            refresh().finally(() => setRefreshed(true));
        }
    }, [])

    return {
        refreshed,
        login: authStore.login
    };
}