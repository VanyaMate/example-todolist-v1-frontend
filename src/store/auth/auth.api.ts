import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IAuthLoginProps, IUser} from "./auth.interface";
import {HOST_API_AUTH} from "../../constants/urls.constant";

export const authApi = createApi({
    reducerPath: 'auth/api',
    baseQuery: fetchBaseQuery({
        baseUrl: HOST_API_AUTH
    }),
    endpoints: (build) => ({
        login: build.query<IUser, IAuthLoginProps>({
            query: (props) => ({
                url: 'login',
                method: 'post',
                body: props,
            })
        })
    })
})