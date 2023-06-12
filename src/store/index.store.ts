import {configureStore} from "@reduxjs/toolkit";
import {themeSlice} from "./theme/theme.slice";
import {authSlice} from "./auth/auth.slice";
import {authApi} from "./auth/auth.api";

export const store = configureStore({
    reducer: {
        [themeSlice.name]: themeSlice.reducer,
        [authSlice.name]: authSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        authApi.middleware,
    ])
})

export type RootState = ReturnType<typeof store.getState>;