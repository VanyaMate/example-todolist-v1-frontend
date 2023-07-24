import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST_API_TODOLIST } from '../../constants/urls.constant';
import { ITodoList, ITodoListCreate } from './todolist.interface';


export const todolistApi = createApi({
    reducerPath: 'todolist/api',
    baseQuery  : fetchBaseQuery({
        baseUrl    : HOST_API_TODOLIST,
        credentials: 'include',
    }),
    endpoints  : (build) => ({
        create: build.query<ITodoList, ITodoListCreate>({
            query: (data) => ({
                url   : '/create',
                method: 'POST',
                body  : data,
            }),
        }),
        update: build.query<ITodoList, { id: number, body: ITodoListCreate }>({
            query: (data) => ({
                url   : '/update/' + data.id,
                method: 'PUT',
                body  : data.body,
            }),
        }),
        delete: build.query<number, number>({
            query: (id) => ({
                url   : '/delete/' + id,
                method: 'DELETE',
            }),
        }),
    }),
});