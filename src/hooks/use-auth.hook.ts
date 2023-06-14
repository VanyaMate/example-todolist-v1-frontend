import {useCallback, useMemo} from "react";
import {useActions} from "./redux/use-actions.hook";
import {authApi} from "../store/auth/auth.api";
import {useNavigate} from "react-router-dom";
import {useTodo} from "./use-todo.hook";

export const useAuth = function () {
    const { auth } = useActions();
    const [ dispatchLogin, loginOptions ] = authApi.useLazyLoginQuery();
    const [ dispatchRegistration, registrationOptions ] = authApi.useLazyRegistrationQuery();
    const [ dispatchLogout, logoutOptions ] = authApi.useLazyLogoutQuery();
    const navigate = useNavigate();
    const todo = useTodo();

    const isFetching = useMemo<boolean>(() =>
        loginOptions.isFetching &&
        registrationOptions.isFetching &&
        logoutOptions.isFetching
    , []);

    const login = useCallback(function (login: string, password: string) {
        return dispatchLogin({ login, password }).then((response) => {
            if (!response.isError) {
                auth.set(response.data!.login);
                todo.addList(response.data!.todo_lists);
                navigate('/');
            }
        })
    }, [])

    const registration = useCallback(function (login: string, password: string) {
        return dispatchRegistration({ login, password }).then((response) => {
            if (!response.isError) {
                auth.set(response.data!.login);
                todo.addList([]);
                navigate('/');
            }
        })
    }, [])

    const logout = useCallback(function () {
        return dispatchLogout().then((response) => {
            if (!response.isError && response.data!.logout) {
                auth.reset();
                todo.reset();
                navigate('/');
            }
        })
    }, [])

    return useMemo(() => {
        return {
            isFetching,
            login,
            logout,
            registration,
        }
    }, [login, logout, registration, isFetching])
}