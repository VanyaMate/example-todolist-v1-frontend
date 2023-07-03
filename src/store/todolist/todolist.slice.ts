import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {ITodoList} from "./todolist.interface";
import {LS_LISTS} from "../../constants/storages.constant";

interface ITodoListSlice {
    lists: ITodoList[]
}

const initialState: ITodoListSlice = {
    lists: JSON.parse(localStorage.getItem(LS_LISTS) ?? '[]')
}

export const todolistSlice = createSlice({
    name: 'todolist',
    initialState: initialState,
    reducers: {
        set (state: Draft<ITodoListSlice>, action: PayloadAction<ITodoList[]>) {
            state.lists = action.payload;
            localStorage.setItem(LS_LISTS, JSON.stringify(state.lists));
        },
        add (state: Draft<ITodoListSlice>, action: PayloadAction<ITodoList>) {
            state.lists.push(action.payload)
            localStorage.setItem(LS_LISTS, JSON.stringify(state.lists));
        },
        remove (state: Draft<ITodoListSlice>, action: PayloadAction<number>) {
            state.lists = state.lists.filter((list) => list.id !== action.payload)
            localStorage.setItem(LS_LISTS, JSON.stringify(state.lists));
        },
        update (state: Draft<ITodoListSlice>, action: PayloadAction<Partial<ITodoList>>) {
            for (let i = 0; i < state.lists.length; i++) {
                if (state.lists[i].id === action.payload.id) {
                    state.lists[i] = {
                        ...state.lists[i],
                        ...action.payload
                    }
                    break;
                }
            }
            localStorage.setItem(LS_LISTS, JSON.stringify(state.lists));
        },
        reset (state: Draft<ITodoListSlice>) {
            state.lists = [];
            localStorage.removeItem(LS_LISTS);
        }
    }
})