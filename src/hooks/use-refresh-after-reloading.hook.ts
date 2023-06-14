import {useAuth} from "./use-auth.hook";
import {useEffect, useState} from "react";
import {useStore} from "./redux/use-store.hook";

export const useRefreshAfterReloading = function () {
    const authStore = useStore((state) => state.auth);
    const { refresh } = useAuth();
    const [refreshed, setRefreshed] = useState<boolean>(false);

    useEffect(() => {
        if (!refreshed && authStore.login) {
            refresh().then(() => setRefreshed(true));
        }
    }, [])
}