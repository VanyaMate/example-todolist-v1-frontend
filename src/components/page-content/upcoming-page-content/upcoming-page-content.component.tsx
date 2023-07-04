import PageContentInside from "../page-content-inside.component";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {useEffect} from "react";
import Vertical from "../../ui/containers/vertical/vertical.component";
import TodoItem from "../../todo/todo-item/todo-item.component";

const UpcomingPageContent = () => {
    const [dispatchGetUpcoming, { data, isFetching }] = todoitemApi.useLazyGetUpcomingQuery();

    useEffect(() => {
        dispatchGetUpcoming({});
    }, [])

    return (
        <PageContentInside title={'Upcoming'} count={data?.count ?? 0}>
            <Vertical offset={5}>
                {
                    data ? data.list.map((item) => <TodoItem key={item.id} item={item}/>) : isFetching ? '' : 'not found'
                }
            </Vertical>
        </PageContentInside>
    );
};

export default UpcomingPageContent;