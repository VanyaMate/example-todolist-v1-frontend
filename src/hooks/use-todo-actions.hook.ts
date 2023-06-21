import {useCallback, useMemo} from "react";
import {useActions} from "./redux/use-actions.hook";
import {ITodoList} from "../store/todolist/todolist.interface";
import {ITodoItemSliceData} from "../store/todoitem/todoitem.slice";

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

    const setTodoItems = useCallback(function (itemSliceData: ITodoItemSliceData) {
        todoitem.set(itemSliceData);
    }, [])

    const reset = useCallback(function () {
        todoitem.reset();
        todolist.reset();
    }, [])

    return useMemo(() => ({
        addList: addLists,
        removeList,
        setTodoItems,
        reset,
    }), [addLists, removeList, reset, setTodoItems])
}