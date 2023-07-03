import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {HOST_API_TODOITEM} from "../../constants/urls.constant";
import {IMultiplyResponse, ISearchOptions} from "../api.interface";
import {ITodoItem} from "./todoitem.interface";
import {getQuerySearchOptions} from "../../helpers/query.helper";

export const todoitemApi = createApi({
    reducerPath: 'todoitem/api',
    baseQuery: fetchBaseQuery({
        baseUrl: HOST_API_TODOITEM,
        credentials: 'include',
    }),
    endpoints: (build) => ({
        getMy: build.query<IMultiplyResponse<ITodoItem>, ISearchOptions<ITodoItem>>({
            query: (props) => ({
                url: '/my',
                method: 'GET',
                params: getQuerySearchOptions<ITodoItem>(props),
            })
        }),
        getOverdue: build.query<IMultiplyResponse<ITodoItem>, ISearchOptions<ITodoItem>>({
            query: (props) => ({
                url: '/overdue',
                method: 'GET',
                params: getQuerySearchOptions<ITodoItem>(props),
            })
        }),
        getToday: build.query<IMultiplyResponse<ITodoItem>, ISearchOptions<ITodoItem>>({
            query: (props) => ({
                url: '/today',
                method: 'GET',
                params: getQuerySearchOptions<ITodoItem>(props),
            })
        }),
        getCompleted: build.query<IMultiplyResponse<ITodoItem>, ISearchOptions<ITodoItem>>({
            query: (props) => ({
                url: '/completed',
                method: 'GET',
                params: getQuerySearchOptions<ITodoItem>(props),
            })
        }),
        getUpcoming: build.query<IMultiplyResponse<ITodoItem>, ISearchOptions<ITodoItem>>({
            query: (props) => ({
                url: '/upcoming',
                method: 'GET',
                params: getQuerySearchOptions<ITodoItem>(props),
            })
        }),
        update: build.query<ITodoItem, { id: number, body: Partial<ITodoItem> }>({
            query: (props) => ({
                url: '/update/' + props.id,
                method: 'PATCH',
                body: props.body,
            })
        }),
        getByList: build.query<IMultiplyResponse<ITodoItem>, { params: ISearchOptions<ITodoItem>, id: number }>({
            query: (props) => ({
                url: '/byList/' + props.id,
                method: 'GET',
                params: getQuerySearchOptions<ITodoItem>(props.params),
            })
        })
    })
})