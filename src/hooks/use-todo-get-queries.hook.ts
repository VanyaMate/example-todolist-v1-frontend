import {todoitemApi} from "../store/todoitem/todoitem.api";
import {useMemo} from "react";
import {ITodoItem} from "../store/todoitem/todoitem.interface";
import {IMultiplyResponse, ISearchOptions} from "../store/api.interface";
import {BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition} from "@reduxjs/toolkit/query";
import {LazyQueryTrigger} from "@reduxjs/toolkit/dist/query/react/buildHooks";

export type SimpleTodoQuery =   LazyQueryTrigger<QueryDefinition<ISearchOptions<ITodoItem>, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, IMultiplyResponse<ITodoItem>, "todoitem/api">>
export type ListTodoQuery =     LazyQueryTrigger<QueryDefinition<{params: ISearchOptions<ITodoItem>, id: number}, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, IMultiplyResponse<ITodoItem>, "todoitem/api">>;

export interface ITodoGetQueries {
    all:        SimpleTodoQuery,
    upcoming:   SimpleTodoQuery,
    overdue:    SimpleTodoQuery,
    today:      SimpleTodoQuery,
    completed:  SimpleTodoQuery,
    list:       ListTodoQuery,
}

export const useTodoGetQueries = function (): ITodoGetQueries {
    const [all] =       todoitemApi.useLazyGetMyQuery();
    const [upcoming] =  todoitemApi.useLazyGetUpcomingQuery();
    const [overdue] =   todoitemApi.useLazyGetOverdueQuery();
    const [today] =     todoitemApi.useLazyGetTodayQuery();
    const [completed] = todoitemApi.useLazyGetCompletedQuery();
    const [list] =      todoitemApi.useLazyGetByListQuery();

    return useMemo(() => ({
        all,
        upcoming,
        overdue,
        today,
        completed,
        list,
    }), [])
}