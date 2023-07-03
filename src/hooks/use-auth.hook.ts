import {useCallback, useMemo} from "react";
import {useActions} from "./redux/use-actions.hook";
import {authApi} from "../store/auth/auth.api";
import {useTodoActions} from "./use-todo-actions.hook";
import {useStableNavigate} from "../context/stable-navigate.context";

export const useAuth = function () {
    const { auth } = useActions();
    const [ dispatchLogin, loginOptions ] = authApi.useLazyLoginQuery();
    const [ dispatchRegistration, registrationOptions ] = authApi.useLazyRegistrationQuery();
    const [ dispatchLogout, logoutOptions ] = authApi.useLazyLogoutQuery();
    const [ dispatchRefresh, refreshOptions ] = authApi.useLazyRefreshQuery();
    const navigate = useStableNavigate();
    const todo = useTodoActions();

    const isFetching = useMemo<boolean>(() =>
        loginOptions.isFetching &&
        registrationOptions.isFetching &&
        logoutOptions.isFetching &&
        refreshOptions.isFetching
    , [loginOptions.isFetching, registrationOptions.isFetching, logoutOptions.isFetching, refreshOptions.isFetching]);

    const login = useCallback(function (login: string, password: string) {
        return dispatchLogin({ login, password })
            .then((response) => {
                auth.set(response.data!.user.login);
                todo.addList(response.data!.todo_lists);
                navigate('/');
            })
            .catch(() => {
                auth.reset();
                todo.reset();
            })
    }, [])

    const registration = useCallback(function (login: string, password: string) {
        return dispatchRegistration({ login, password })
            .then((response) => {
                auth.set(response.data!.user.login);
                todo.addList([]);
                navigate('/');
            })
            .catch(() => {
                auth.reset();
                todo.reset();
            })
    }, [])

    const logout = useCallback(function () {
        return dispatchLogout()
            .then(() => {
                auth.reset();
                todo.reset();
                navigate('/');
            })
    }, [])

    const refresh = useCallback(function () {
        return dispatchRefresh()
            .then((response) => {
                auth.set(response.data!.user.login);
                todo.setLists(response.data!.todo_lists);
            })
            .catch(() => {
                auth.reset();
                todo.reset();
            })
    }, [])

    return useMemo(() => {
        return {
            isFetching,
            login,
            logout,
            registration,
            refresh,
        }
    }, [login, logout, registration, isFetching, refresh])
}