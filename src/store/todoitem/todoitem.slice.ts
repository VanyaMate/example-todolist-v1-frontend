import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {ITodoItem} from "./todoitem.interface";
import {LS_ITEMS} from "../../constants/storages.constant";



interface ITodoItemSlice {
    items: { [key: number]: ITodoItem };
    today: number[];
    upcoming: number[];
}

const initialState: ITodoItemSlice = {
    items: JSON.parse(localStorage.getItem(LS_ITEMS) ?? '[]'),
    today: [],
    upcoming: [],
}

export const todoitemSlice = createSlice({
    name: 'todoitem',
    initialState: initialState,
    reducers: {
        add (state: Draft<ITodoItemSlice>, action: PayloadAction<ITodoItem>) {
            state.items[action.payload.id] = action.payload;
            localStorage.setItem(LS_ITEMS, JSON.stringify(state.items));
        },
        remove (state: Draft<ITodoItemSlice>, action: PayloadAction<number>) {
            delete state.items[action.payload];
            localStorage.setItem(LS_ITEMS, JSON.stringify(state.items));
        },
        update (state: Draft<ITodoItemSlice>, action: PayloadAction<ITodoItem>) {
            state.items[action.payload.id] = {...state.items[action.payload.id], ...action.payload};
            localStorage.setItem(LS_ITEMS, JSON.stringify(state.items));
        },
        reset (state: Draft<ITodoItemSlice>) {
            state.items = {};
            localStorage.removeItem(LS_ITEMS);
        }
    }
})