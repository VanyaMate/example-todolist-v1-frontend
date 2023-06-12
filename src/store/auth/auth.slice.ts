import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {LS_AUTH} from "../../constants/storages.constant";

export interface IAuthSlice {
    login: string | null,
}

const initialState: IAuthSlice = {
    login: localStorage.getItem(LS_AUTH) ?? null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        set (state: Draft<IAuthSlice>, action: PayloadAction<string>) {
            state.login = action.payload;
            localStorage.setItem(LS_AUTH, action.payload);
        },
        reset (state: Draft<IAuthSlice>) {
            state.login = null;
            localStorage.removeItem(LS_AUTH);
        }
    }
})