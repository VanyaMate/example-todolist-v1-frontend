import {configureStore} from "@reduxjs/toolkit";
import {themeSlice} from "./theme/theme.slice";

export const store = configureStore({
    reducer: {
        [themeSlice.name]: themeSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([

    ])
})

export type RootState = ReturnType<typeof store.getState>;