import {useParams} from "react-router-dom";
import {useStore} from "../../../hooks/redux/use-store.hook";
import {useMemo} from "react";
import Vertical from "../../ui/containers/vertical/vertical.component";

const ListPageContent = () => {
    const params = useParams<{ id: string }>();
    const todoListsSlice = useStore((state) => state.todolist);
    const activeList = useMemo(() => {
        return todoListsSlice.lists.filter((list) => list.id === +(params.id ?? -1))[0];
    }, [params.id])



    return (
        <div>
            <h2>{ activeList.title }</h2>
            <p>{ activeList.description }</p>
            <p>{ activeList.createdAt }</p>
            <p>{ activeList.updatedAt }</p>
            <h2>List:</h2>
            <Vertical offset={10}>

            </Vertical>
        </div>
    );
};

export default ListPageContent;