import {configureStore} from "@reduxjs/toolkit";
import {themeSlice} from "./theme/theme.slice";
import {authSlice} from "./auth/auth.slice";
import {authApi} from "./auth/auth.api";
import {todolistSlice} from "./todolist/todolist.slice";
import {todoitemSlice} from "./todoitem/todoitem.slice";
import {todoitemApi} from "./todoitem/todoitem.api";

export const store = configureStore({
    reducer: {
        [themeSlice.name]: themeSlice.reducer,
        [authSlice.name]: authSlice.reducer,
        [todolistSlice.name]: todolistSlice.reducer,
        [todoitemSlice.name]: todoitemSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [todoitemApi.reducerPath]: todoitemApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        authApi.middleware,
        todoitemApi.middleware,
    ])
})

export type RootState = ReturnType<typeof store.getState>;