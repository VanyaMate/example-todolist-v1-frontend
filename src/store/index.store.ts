import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './theme/theme.slice';
import { authSlice } from './auth/auth.slice';
import { authApi } from './auth/auth.api';
import { todolistSlice } from './todolist/todolist.slice';
import { todoitemSlice } from './todoitem/todoitem.slice';
import { todoitemApi } from './todoitem/todoitem.api';
import { searchSlice } from './search/search.slice';
import { redactorSlice } from './redactor/redactor.slice';
import { todolistApi } from './todolist/todolist.api';
import { tagsApi } from '@/store/tags/tags.api';


export const store = configureStore({
    reducer   : {
        [themeSlice.name]        : themeSlice.reducer,
        [authSlice.name]         : authSlice.reducer,
        [todolistSlice.name]     : todolistSlice.reducer,
        [todoitemSlice.name]     : todoitemSlice.reducer,
        [searchSlice.name]       : searchSlice.reducer,
        [redactorSlice.name]     : redactorSlice.reducer,
        [authApi.reducerPath]    : authApi.reducer,
        [todoitemApi.reducerPath]: todoitemApi.reducer,
        [todolistApi.reducerPath]: todolistApi.reducer,
        [tagsApi.reducerPath]    : tagsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        authApi.middleware,
        todoitemApi.middleware,
        todolistApi.middleware,
        tagsApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;