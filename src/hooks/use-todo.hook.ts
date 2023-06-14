import {useCallback, useMemo} from "react";
import {useActions} from "./redux/use-actions.hook";
import {ITodoList} from "../store/todolist/todolist.interface";
import {useStore} from "./redux/use-store.hook";
import {ITodoItem} from "../store/todoitem/todoitem.interface";

export const useTodo = function () {
    const todoListSlice = useStore((state) => state.todolist);
    const { todolist, todoitem } = useActions();

    const addList = useCallback(function (todoLists: ITodoList[]) {
        todoLists.forEach((list) => {
            list.todo_items.forEach((item) => {
                todoitem.add(item);
            })
            todolist.add(list);
        })
    }, [])

    const removeList = useCallback(function (listId: number) {
        const list = todoListSlice.lists.filter((list) => list.id === listId)[0];
        if (list) {
            list.todo_items.forEach((item) => todoitem.remove(item));
        }
        todolist.remove(listId);
    }, [])

    const addItem = useCallback(function (item: ITodoItem, listId: number = -1) {
        todoitem.add(item);
        if (listId !== -1) {
            const list = todoListSlice.lists.filter((list) => list.id === listId)[0];
            if (list) {
                todolist.update({...list, todo_items: list.todo_items.concat([item.id])})
            }
        }
    }, [])

    const removeItem = useCallback(function (itemId: number, listId: number = -1) {
        todoitem.remove(itemId);
        if (listId !== -1) {
            const list = todoListSlice.lists.filter((list) => list.id === listId)[0];
            if (list) {
                todolist.update({...list, todo_items: list.todo_items.filter((item) => item !== itemId)})
            }
        }
    }, [])

    const reset = useCallback(function () {
        todoitem.reset();
        todolist.reset();
    }, [])

    return useMemo(() => ({
        addList,
        removeList,
        addItem,
        removeItem,
        reset,
    }), [addList, removeList, addItem, removeItem, reset])
}