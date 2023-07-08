import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {ITodoItem} from "./todoitem.interface";

export interface ITodoItemSlice {
    list: ITodoItem[],
    fetching:   boolean;
    error:      boolean;
    count:      number;
}

const initialState: ITodoItemSlice = {
    list:       [],
    fetching:   false,
    error:      false,
    count:      0,
}

export const todoitemSlice = createSlice({
    name: 'todoitem',
    initialState: initialState,
    reducers: {
        set (state: Draft<ITodoItemSlice>, action: PayloadAction<ITodoItem[]>) {
            state.list = action.payload;
        },
        reset (state: Draft<ITodoItemSlice>) {
            state.count = 0;
            state.list = [];
        },
        add (state: Draft<ITodoItemSlice>, action: PayloadAction<ITodoItem>) {
            state.count += 1;
            state.list.push(action.payload);
        },
        addFirst (state: Draft<ITodoItemSlice>, action: PayloadAction<ITodoItem>) {
            state.count += 1;
            state.list.unshift(action.payload);
        },
        remove (state: Draft<ITodoItemSlice>, action: PayloadAction<number>) {
            state.list = state.list.filter((item) => {
                if (item.id !== action.payload) {
                    state.count -= 1;
                    return false;
                }
                return true;
            });
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
        setFetching (state: Draft<ITodoItemSlice>, action: PayloadAction<boolean>) {
            state.fetching = action.payload;
        },
        setError (state: Draft<ITodoItemSlice>, action: PayloadAction<boolean>) {
            state.error = action.payload;
        },
        setCount (state: Draft<ITodoItemSlice>, action: PayloadAction<number>) {
            state.count = action.payload;
        }
    }
})