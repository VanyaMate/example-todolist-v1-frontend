import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {LS_THEME} from "../../constants/storages.constant";

export enum ThemeType {
    DARK = 'dark',
    WHITE = 'white',
}

export interface IThemeSlice {
    theme: ThemeType;
}

const initialState: IThemeSlice = {
    theme: localStorage.getItem(LS_THEME) as ThemeType ?? ThemeType.WHITE
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        set (state: Draft<IThemeSlice>, action: PayloadAction<ThemeType>) {
            state.theme = action.payload;
            localStorage.setItem(LS_THEME, action.payload);
        }
    }
});