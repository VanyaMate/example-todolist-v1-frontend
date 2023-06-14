import {configureStore} from "@reduxjs/toolkit";
import {themeSlice} from "./theme/theme.slice";
import {authSlice} from "./auth/auth.slice";
import {authApi} from "./auth/auth.api";
import {todolistSlice} from "./todolist/todolist.slice";
import {todoitemSlice} from "./todoitem/todoitem.slice";

export const store = configureStore({
    reducer: {
        [themeSlice.name]: themeSlice.reducer,
        [authSlice.name]: authSlice.reducer,
        [todolistSlice.name]: todolistSlice.reducer,
        [todoitemSlice.name]: todoitemSlice.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        authApi.middleware,
    ])
})

export type RootState = ReturnType<typeof store.getState>;