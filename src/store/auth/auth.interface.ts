import {ITodoList} from "../todolist/todolist.interface";

export interface ILogout {
    logout: boolean,
}

export interface IAuthLoginProps {
    login: string;
    password: string;
}

export interface IUser {
    id: number;
    login: string;
    createdAt: string;
    updatedAt: string;
    todo_lists: ITodoList[]
}