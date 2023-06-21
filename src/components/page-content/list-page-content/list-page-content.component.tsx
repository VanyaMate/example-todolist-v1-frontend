import {useParams} from "react-router-dom";
import {useStore} from "../../../hooks/redux/use-store.hook";
import {useMemo} from "react";
import Vertical from "../../ui/containers/vertical/vertical.component";

const ListPageContent = () => {
    const params = useParams<{ id: string }>();
    const todoListsSlice = useStore((state) => state.todolist);
    const todoItemsSlice = useStore((state) => state.todoitem);
    const activeList = useMemo(() => {
        return todoListsSlice.lists.filter((list) => list.id === +(params.id ?? -1))[0];
    }, [params.id])

    const items = useMemo(() => {
        if (activeList) {
            return activeList.todo_items.map((id) => {
                return todoItemsSlice.items[id];
            })
        }

        return [];
    }, [activeList])

    return (
        <div>
            <h2>{ activeList.title }</h2>
            <p>{ activeList.description }</p>
            <p>{ activeList.createdAt }</p>
            <p>{ activeList.updatedAt }</p>
            <h2>List:</h2>
            <Vertical offset={10}>
                { items.map((item) => <div key={item.id}>{item.title}</div>) }
            </Vertical>
        </div>
    );
};

export default ListPageContent;