import {useParams} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import {useSlice} from "./redux/use-store.hook";
import {todoitemApi} from "../store/todoitem/todoitem.api";
import {useActions} from "./redux/use-actions.hook";

export const useListTodoItem = function () {
    const { id } = useParams<{ id: string }>();
    const todolist = useSlice((state) => state.todolist);
    const search = useSlice((state) => state.search);
    const [fetching, setFetching] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const {todoitem} = useActions();

    const list = useMemo(() => todolist.lists.filter((list) => list.id === Number(id))[0], [id]);
    const [dispatchGetByList] = todoitemApi.useLazyGetByListQuery();

    useEffect(() => {
        if (list) {
            setFetching(true);
            setError(false);

            dispatchGetByList({ id: Number(id), params: search.currentSearchOptions})
                .then(({ data }) => {
                    todoitem.set(data!.list);
                    setCount(data!.count);
                })
                .catch(() =>  setError(true))
                .finally(() =>  setFetching(false))
        }
    }, [list])

    return {list, fetching, error, count};
}