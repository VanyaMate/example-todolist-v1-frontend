import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {ITodoItem} from "./todoitem.interface";
import {LS_ITEMS} from "../../constants/storages.constant";

interface ITodoItemSlice {
    items: ITodoItem[]
}

const initialState: ITodoItemSlice = {
    items: JSON.parse(localStorage.getItem(LS_ITEMS) ?? '[]'),
}

export const todoitemSlice = createSlice({
    name: 'todoitem',
    initialState: initialState,
    reducers: {
        add (state: Draft<ITodoItemSlice>, action: PayloadAction<ITodoItem>) {
            state.items.push({
                ...action.payload,
            })
            localStorage.setItem(LS_ITEMS, JSON.stringify(state.items));
        },
        remove (state: Draft<ITodoItemSlice>, action: PayloadAction<number>) {
            state.items = state.items.filter((item) => item.id !== action.payload)
            localStorage.setItem(LS_ITEMS, JSON.stringify(state.items));
        },
        update (state: Draft<ITodoItemSlice>, action: PayloadAction<ITodoItem>) {
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === action.payload.id) {
                    state.items[i] = {
                        ...action.payload
                    }
                    break;
                }
            }
            localStorage.setItem(LS_ITEMS, JSON.stringify(state.items));
        },
        reset (state: Draft<ITodoItemSlice>) {
            state.items = [];
            localStorage.removeItem(LS_ITEMS);
        }
    }
})