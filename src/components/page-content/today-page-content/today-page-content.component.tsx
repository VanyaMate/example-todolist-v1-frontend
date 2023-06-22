import PageContentInside from "../page-content-inside.component";
import {useStore} from "../../../hooks/redux/use-store.hook";
import Vertical from "../../ui/containers/vertical/vertical.component";
import TodoItem from "../../todo-item/todo-item.component";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {useEffect} from "react";

const TodayPageContent = () => {
    const todoItemSlice = useStore((state) => state.todoitem);
    const [dispatchGetToday, { data, isFetching }] = todoitemApi.useLazyGetTodayQuery();

    useEffect(() => {
        dispatchGetToday({});
    }, [])

    return (
        <PageContentInside title={'Today'} count={todoItemSlice.data.today.length}>
            <Vertical offset={5}>
                {
                    data ? data.list.map((item) => <TodoItem key={item.id} item={item}/>) : isFetching ? '' : 'not found'
                }
            </Vertical>
        </PageContentInside>
    );
};

export default TodayPageContent;