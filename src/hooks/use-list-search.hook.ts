import {ITodoList} from "../store/todolist/todolist.interface";
import {useCallback} from "react";
import {useSlice} from "./redux/use-store.hook";

export type UseListSearch = (id: number) => (ITodoList | undefined);

export const useListSearch = function (): UseListSearch {
    const todolist = useSlice((state) => state.todolist);
    return useCallback((id: number) => {
        return todolist.lists.filter((list) => list.id === id)[0];
    }, [todolist.lists])
}