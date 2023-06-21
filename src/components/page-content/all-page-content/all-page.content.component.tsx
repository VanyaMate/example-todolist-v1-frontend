import PageContentInside from "../page-content-inside.component";
import {useStore} from "../../../hooks/redux/use-store.hook";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {useEffect} from "react";
import TodoItem from "../../todo-item/todo-item.component";
import Vertical from "../../ui/containers/vertical/vertical.component";

const AllPageContent = () => {
    const todoItemSlice = useStore((state) => state.todoitem);
    const [dispatchGetMy, { data }] = todoitemApi.useLazyGetMyQuery();

    useEffect(() => {
        dispatchGetMy({});
    }, [])

    return (
        <PageContentInside title={'All'} count={todoItemSlice.data.all}>
            <Vertical offset={5}>
                {
                    data ? data.list.map((item) => <TodoItem key={item.id} item={item}/>) : 'not found'
                }
            </Vertical>
        </PageContentInside>
    );
};

export default AllPageContent;