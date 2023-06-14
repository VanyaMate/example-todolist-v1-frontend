import {ITodoItem} from "../todoitem/todoitem.interface";

export interface ITodoList {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    todo_items: ITodoItem[];
}

export interface ITodoListSliceItem extends Omit<ITodoList, keyof { todo_items: ITodoItem[] }> {
    todo_items: number[];
}