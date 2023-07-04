import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {ITodoList} from "../todolist/todolist.interface";
import {ITodoItem} from "../todoitem/todoitem.interface";

export enum RedactorType {
    TASK = 'task',
    LIST = 'list',
}

interface IRedactorSlice {
    opened: boolean;
    redactorType: RedactorType;
    list: ITodoList | null;
    item: ITodoItem | null;
}

const initialState: IRedactorSlice = {
    opened: false,
    redactorType: RedactorType.TASK,
    list: null,
    item: null,
}

export const redactorSlice = createSlice({
    name: 'redactor',
    initialState: initialState,
    reducers: {
        setOpen (state: Draft<IRedactorSlice>, action: PayloadAction<boolean>) {
            state.opened = action.payload;
        },
        setList (state: Draft<IRedactorSlice>, action: PayloadAction<ITodoList | null>) {
            state.opened = true;
            state.list = action.payload;
            state.redactorType = RedactorType.LIST;
        },
        setItem (state: Draft<IRedactorSlice>, action: PayloadAction<ITodoItem | null>) {
            state.opened = true;
            state.item = action.payload;
            state.redactorType = RedactorType.TASK;
        },
    }
})