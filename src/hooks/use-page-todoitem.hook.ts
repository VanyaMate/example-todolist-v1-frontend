import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import {todoitemApi} from "../store/todoitem/todoitem.api";
import {useActions} from "./redux/use-actions.hook";
import {useStore} from "./redux/use-store.hook";
import {IMultiplyResponse, ISearchOptions} from "../store/api.interface";
import {ITodoItem} from "../store/todoitem/todoitem.interface";
import {BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition} from "@reduxjs/toolkit/query";
import {LazyQueryTrigger} from "@reduxjs/toolkit/dist/query/react/buildHooks";

type DispatcherType = LazyQueryTrigger<QueryDefinition<ISearchOptions<ITodoItem>, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, IMultiplyResponse<ITodoItem>, "todoitem/api">>;

enum Dispatcher {
    ALL = '/all',
    COMPLETED = '/completed',
    OVERDUE = '/overdue',
    TODAY = '/today',
    UPCOMING = '/upcoming',
}

export const usePageTodoItem = function () {
    const {pathname, search} = useLocation();
    const [searchParams] = useSearchParams();
    const {todoitem, search: searchActions} = useActions();
    const searchSlice = useStore((state) => state.search);
    const [dispatcherName, setDispatcherName] = useState<string>(Dispatcher.ALL);
    const [fetching, setFetching] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    const [dispatchGetMy] = todoitemApi.useLazyGetMyQuery();
    const [dispatchGetCompleted] = todoitemApi.useLazyGetCompletedQuery();
    const [dispatchGetOverdue] = todoitemApi.useLazyGetOverdueQuery();
    const [dispatchGetToday] = todoitemApi.useLazyGetTodayQuery();
    const [dispatchGetUpcoming] = todoitemApi.useLazyGetUpcomingQuery();

    const dispatcher = useMemo<DispatcherType>(() => {
        switch (pathname) {
            case Dispatcher.COMPLETED:
                setDispatcherName(Dispatcher.COMPLETED.split('/')[1]);
                return dispatchGetCompleted;
            case Dispatcher.OVERDUE:
                setDispatcherName(Dispatcher.OVERDUE.split('/')[1]);
                return dispatchGetOverdue;
            case Dispatcher.TODAY:
                setDispatcherName(Dispatcher.TODAY.split('/')[1]);
                return dispatchGetToday;
            case Dispatcher.UPCOMING:
                setDispatcherName(Dispatcher.UPCOMING.split('/')[1]);
                return dispatchGetUpcoming;
            default:
                setDispatcherName(Dispatcher.ALL.split('/')[1]);
                return dispatchGetMy;
        }
    }, [pathname]);

    useEffect(() => {
        searchActions.resetCurrentOptions();
    }, [pathname])

    useEffect(() => {
        let limit: string | null = searchParams.get('limit');
        let offset: string | null = searchParams.get('offset');
        let order: string | null = searchParams.get('order');

        const options: Partial<ISearchOptions<ITodoItem>> = {};
        if (limit) options.limit = Number(limit);
        if (offset) options.offset = Number(offset);
        if (order) options.order = order;

        searchActions.setCurrentOptions(options);
    }, [search])

    useEffect(() => {
        setFetching(true);
        setError(false);

        dispatcher && dispatcher(searchSlice.currentSearchOptions)
            .then(({ data }) => {
                todoitem.set(data!.list);
                setCount(data!.count);
            })
            .catch(() => setError(true))
            .finally(() => setFetching(false))
    }, [dispatcher, searchSlice.currentSearchOptions])

    return {fetching, error, dispatcherName, count};
}