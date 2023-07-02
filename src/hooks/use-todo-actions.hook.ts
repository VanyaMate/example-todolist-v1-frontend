import {useCallback, useMemo} from "react";
import {useActions} from "./redux/use-actions.hook";
import {ITodoList} from "../store/todolist/todolist.interface";

export const useTodoActions = function () {
    const { todolist, todoitem } = useActions();

    const addLists = useCallback(function (todoLists: ITodoList[]) {
        todoLists.forEach((list) => {
            todolist.add(list);
        })
    }, [])

    const removeList = useCallback(function (listId: number) {
        todolist.remove(listId);
    }, [])

    const reset = useCallback(function () {
        todoitem.reset();
        todolist.reset();
    }, [])

    return useMemo(() => ({
        addList: addLists,
        removeList,
        reset,
    }), [addLists, removeList, reset])
}