import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IAuthLoginProps, ILogout, IUser} from "./auth.interface";
import {HOST_API_AUTH} from "../../constants/urls.constant";

export const authApi = createApi({
    reducerPath: 'auth/api',
    baseQuery: fetchBaseQuery({
        baseUrl: HOST_API_AUTH,
        credentials: 'include'
    }),
    endpoints: (build) => ({
        login: build.query<IUser, IAuthLoginProps>({
            query: (props) => ({
                url: 'login',
                method: 'post',
                body: props,
            })
        }),
        registration: build.query<IUser, IAuthLoginProps>({
            query: (props) => ({
                url: 'registration',
                method: 'post',
                body: props,
            })
        }),
        logout: build.query<ILogout, void>({
            query: () => ({
                url: 'logout',
                method: 'get',
            })
        }),
        refresh: build.query<IUser, void>({
            query: () => ({
                url: 'refresh',
                method: 'get',
            })
        }),
    })
})