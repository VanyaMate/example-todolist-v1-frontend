import {useCallback, useMemo} from "react";
import {useActions} from "./redux/use-actions.hook";
import {authApi} from "../store/auth/auth.api";
import {useNavigate} from "react-router-dom";
import {useTodoActions} from "./use-todo-actions.hook";

export const useAuth = function () {
    const { auth } = useActions();
    const [ dispatchLogin, loginOptions ] = authApi.useLazyLoginQuery();
    const [ dispatchRegistration, registrationOptions ] = authApi.useLazyRegistrationQuery();
    const [ dispatchLogout, logoutOptions ] = authApi.useLazyLogoutQuery();
    const [ dispatchRefresh, refreshOptions ] = authApi.useLazyRefreshQuery();
    const navigate = useNavigate();
    const todo = useTodoActions();

    const isFetching = useMemo<boolean>(() =>
        loginOptions.isFetching &&
        registrationOptions.isFetching &&
        logoutOptions.isFetching &&
        refreshOptions.isFetching
    , [loginOptions.isFetching, registrationOptions.isFetching, logoutOptions.isFetching, refreshOptions.isFetching]);

    const login = useCallback(function (login: string, password: string) {
        return dispatchLogin({ login, password }).then((response) => {
            auth.reset();
            todo.reset();
            if (!response.isError) {
                auth.set(response.data!.user.login);
                todo.addList(response.data!.todo_lists);
                todo.setTodoItems(response.data!.todo_items)
                navigate('/');
            }
        })
    }, [])

    const registration = useCallback(function (login: string, password: string) {
        return dispatchRegistration({ login, password }).then((response) => {
            auth.reset();
            todo.reset();
            if (!response.isError) {
                auth.set(response.data!.user.login);
                todo.addList([]);
                todo.setTodoItems(response.data!.todo_items)
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

    const refresh = useCallback(function () {
        return dispatchRefresh().then((response) => {
            auth.reset();
            todo.reset();
            if (!response.isError) {
                auth.set(response.data!.user.login);
                todo.addList(response.data!.todo_lists);
                todo.setTodoItems(response.data!.todo_items)
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
            refresh,
        }
    }, [login, logout, registration, isFetching, refresh])
}