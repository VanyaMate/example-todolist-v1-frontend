import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {HOST_API_TODOITEM} from "../../constants/urls.constant";
import {IMultiplyResponse, ISearchOptions} from "../api.interface";
import {ITodoItem} from "./todoitem.interface";

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
                method: 'get',
                query: {
                    offset: props.offset ?? 0,
                    limit: props.limit ?? 10,
                    order: props.order ? props.order.map(([key, value]) => `${key}:${value}`).join(',') : ''
                }
            })
        }),
        getOverdue: build.query<IMultiplyResponse<ITodoItem>, ISearchOptions<ITodoItem>>({
            query: (props) => ({
                url: '/overdue',
                method: 'get',
                query: {
                    offset: props.offset ?? 0,
                    limit: props.limit ?? 10,
                    order: props.order ? props.order.map(([key, value]) => `${key}:${value}`).join(',') : ''
                }
            })
        }),
        getToday: build.query<IMultiplyResponse<ITodoItem>, ISearchOptions<ITodoItem>>({
            query: (props) => ({
                url: '/today',
                method: 'get',
                query: {
                    offset: props.offset ?? 0,
                    limit: props.limit ?? 10,
                    order: props.order ? props.order.map(([key, value]) => `${key}:${value}`).join(',') : ''
                }
            })
        }),
        getCompleted: build.query<IMultiplyResponse<ITodoItem>, ISearchOptions<ITodoItem>>({
            query: (props) => ({
                url: '/completed',
                method: 'get',
                query: {
                    offset: props.offset ?? 0,
                    limit: props.limit ?? 10,
                    order: props.order ? props.order.map(([key, value]) => `${key}:${value}`).join(',') : ''
                }
            })
        }),
        getUpcoming: build.query<IMultiplyResponse<ITodoItem>, ISearchOptions<ITodoItem>>({
            query: (props) => ({
                url: '/upcoming',
                method: 'get',
                query: {
                    offset: props.offset ?? 0,
                    limit: props.limit ?? 10,
                    order: props.order ? props.order.map(([key, value]) => `${key}:${value}`).join(',') : ''
                }
            })
        })
    })
})