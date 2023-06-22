import PageContentInside from "../page-content-inside.component";
import {useStore} from "../../../hooks/redux/use-store.hook";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {useEffect} from "react";
import TodoItem from "../../todo-item/todo-item.component";
import Vertical from "../../ui/containers/vertical/vertical.component";

const CompletedPageContent = () => {
    const todoItemSlice = useStore((state) => state.todoitem);
    const [dispatchGetCompleted, { data, isFetching }] = todoitemApi.useLazyGetCompletedQuery();

    useEffect(() => {
        dispatchGetCompleted({});
    }, [])

    return (
        <PageContentInside title={'Completed'} count={todoItemSlice.data.completed}>
            <Vertical offset={5}>
                {
                    data ? data.list.map((item) => <TodoItem key={item.id} item={item}/>) : isFetching ? '' : 'not found'
                }
            </Vertical>
        </PageContentInside>
    );
};

export default CompletedPageContent;