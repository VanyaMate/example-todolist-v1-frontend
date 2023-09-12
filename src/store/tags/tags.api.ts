import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST_API_TAGS } from '@/constants/urls.constant';
import { ITag, ITagCreate } from '@/store/tags/tags.interface';


export const tagsApi = createApi({
    reducerPath: 'tags/api',
    baseQuery  : fetchBaseQuery({
        baseUrl    : HOST_API_TAGS,
        credentials: 'include',
    }),
    endpoints (build) {
        return {
            create: build.query<ITag, ITagCreate>({
                query: (props) => ({
                    url   : '',
                    method: 'POST',
                    body  : props,
                }),
            }),
        };
    },
});