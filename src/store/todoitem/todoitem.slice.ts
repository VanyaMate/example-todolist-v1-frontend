import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {ITodoItem} from "./todoitem.interface";


export interface ITodoItemSliceData {
    all: number,
    overdue: number,
    completed: number,
    today: ITodoItem[],
    upcoming: ITodoItem[],
}

interface ITodoItemSlice {
    data: ITodoItemSliceData
}

const initialState: ITodoItemSlice = {
    data: {
        today: [],
        upcoming: [],
        all: 0,
        overdue: 0,
        completed: 0,
    }
}

export const todoitemSlice = createSlice({
    name: 'todoitem',
    initialState: initialState,
    reducers: {
        set (state: Draft<ITodoItemSlice>, action: PayloadAction<ITodoItemSliceData>) {
            state.data = action.payload;
        },
        reset (state: Draft<ITodoItemSlice>) {
            state.data = {
                today: [],
                upcoming: [],
                all: 0,
                overdue: 0,
                completed: 0,
            };
        },
        addToday (state: Draft<ITodoItemSlice>, action: PayloadAction<ITodoItem>) {
            state.data.today.push(action.payload)
            state.data.today = state.data.today.sort((a, b) => +new Date(a.completion_date) - +new Date(b.completion_date))
        },
        removeToday (state: Draft<ITodoItemSlice>, action: PayloadAction<number>) {
            state.data.today = state.data.today.filter((item) => item.id !== action.payload);
        },
        addUpcoming (state: Draft<ITodoItemSlice>, action: PayloadAction<ITodoItem>) {
            state.data.upcoming.push(action.payload)
            state.data.upcoming = state.data.upcoming.sort((a, b) => +new Date(a.completion_date) - +new Date(b.completion_date))
        },
        removeUpcoming (state: Draft<ITodoItemSlice>, action: PayloadAction<number>) {
            state.data.upcoming = state.data.upcoming.filter((item) => item.id !== action.payload);
        },
        updateCompleted (state: Draft<ITodoItemSlice>, action: PayloadAction<number>) {
            state.data.completed = action.payload;
        },
        updateAll (state: Draft<ITodoItemSlice>, action: PayloadAction<number>) {
            state.data.all = action.payload;
        },
        updateOverdue (state: Draft<ITodoItemSlice>, action: PayloadAction<number>) {
            state.data.overdue = action.payload;
        },
    }
})