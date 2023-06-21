import {ITodoList} from "../todolist/todolist.interface";
import {ITodoItemSliceData} from "../todoitem/todoitem.slice";

export interface ILogout {
    logout: boolean,
}

export interface IAuthLoginProps {
    login: string;
    password: string;
}

export interface IAuthData {
    user: {
        id: number;
        login: string;
        createdAt: string;
        updatedAt: string;
    };
    todo_items: ITodoItemSliceData,
    todo_lists: ITodoList[],
}