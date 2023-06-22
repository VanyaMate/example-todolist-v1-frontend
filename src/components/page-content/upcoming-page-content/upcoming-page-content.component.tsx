import PageContentInside from "../page-content-inside.component";
import {useStore} from "../../../hooks/redux/use-store.hook";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {useEffect} from "react";
import Vertical from "../../ui/containers/vertical/vertical.component";
import TodoItem from "../../todo-item/todo-item.component";

const UpcomingPageContent = () => {
    const todoItemSlice = useStore((state) => state.todoitem);
    const [dispatchGetUpcoming, { data, isFetching }] = todoitemApi.useLazyGetUpcomingQuery();

    useEffect(() => {
        dispatchGetUpcoming({});
    }, [])

    return (
        <PageContentInside title={'Upcoming'} count={todoItemSlice.data.upcoming.length}>
            <Vertical offset={5}>
                {
                    data ? data.list.map((item) => <TodoItem key={item.id} item={item}/>) : isFetching ? '' : 'not found'
                }
            </Vertical>
        </PageContentInside>
    );
};

export default UpcomingPageContent;