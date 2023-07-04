import {useAuth} from "./use-auth.hook";
import {useEffect, useState} from "react";
import {useSlice} from "./redux/use-store.hook";

export const useRefreshAfterReloading = function () {
    const authStore = useSlice((state) => state.auth);
    const { refresh } = useAuth();
    const [refreshed, setRefreshed] = useState<boolean>(false);

    useEffect(() => {
        if (!refreshed && authStore.login) {
            refresh().then(() => setRefreshed(true));
        }
    }, [])
}