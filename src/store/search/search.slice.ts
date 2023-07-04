import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {LS_ITEMS_SEARCH} from "../../constants/storages.constant";
import {ITodoItem} from "../todoitem/todoitem.interface";
import {ISearchOptions} from "../api.interface";

interface ISearchSlice {
    defaultSearchOptions: ISearchOptions<ITodoItem>,
    currentSearchOptions: ISearchOptions<ITodoItem>,
}

const defaultSavedSearchOptions: string | null = localStorage.getItem(LS_ITEMS_SEARCH);
const defaultSearchOptions = defaultSavedSearchOptions ? JSON.parse(defaultSavedSearchOptions) : {
    limit: 10,
    offset: 0,
    order: [
        ["createdAt", "desc"]
    ],
};

const initialState: ISearchSlice = {
    defaultSearchOptions: defaultSearchOptions,
    currentSearchOptions: defaultSearchOptions,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        updateDefault (state: Draft<ISearchSlice>, action: PayloadAction<Partial<ISearchOptions<ITodoItem>>>) {
            state.defaultSearchOptions = {...state.defaultSearchOptions, ...action.payload};
            localStorage.setItem(LS_ITEMS_SEARCH, JSON.stringify(state.defaultSearchOptions));
        },
        setCurrentOptions (state: Draft<ISearchSlice>, action: PayloadAction<Partial<ISearchOptions<ITodoItem>>>) {
            state.currentSearchOptions = {...state.defaultSearchOptions, ...action.payload};
        },
        resetCurrentOptions (state: Draft<ISearchSlice>) {
            state.currentSearchOptions = {...state.defaultSearchOptions};
        }
    }
})