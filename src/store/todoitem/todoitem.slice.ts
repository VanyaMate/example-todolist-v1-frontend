import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {ITodoItem} from "./todoitem.interface";

interface ITodoItemSlice {
    list: ITodoItem[],
}

const initialState: ITodoItemSlice = {
    list: [],
}

export const todoitemSlice = createSlice({
    name: 'todoitem',
    initialState: initialState,
    reducers: {
        set (state: Draft<ITodoItemSlice>, action: PayloadAction<ITodoItem[]>) {
            state.list = action.payload;
        },
        reset (state: Draft<ITodoItemSlice>) {
            state.list = [];
        },
        add (state: Draft<ITodoItemSlice>, action: PayloadAction<ITodoItem>) {
            state.list.push(action.payload);
        },
        remove (state: Draft<ITodoItemSlice>, action: PayloadAction<number>) {
            state.list = state.list.filter((item) => item.id !== action.payload);
        },
        patch (state: Draft<ITodoItemSlice>, action: PayloadAction<[number, Partial<ITodoItem>]>) {
            const [id, patch]: [number, Partial<ITodoItem>] = action.payload;
            for (let i = 0; i < state.list.length; i++) {
                const item = state.list[i];
                if (item.id === id) {
                    state.list.splice(i, 1, {...item, ...patch});
                    break;
                }
            }
        },
    }
})