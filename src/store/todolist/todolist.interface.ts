import {ITodoItem} from "../todoitem/todoitem.interface";

export interface ITodoList {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    todo_items: ITodoItem[];
}