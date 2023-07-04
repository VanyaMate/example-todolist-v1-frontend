import PageContentInside from "../page-content-inside.component";
import Vertical from "../../ui/containers/vertical/vertical.component";
import TodoItem from "../../todo/todo-item/todo-item.component";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {useEffect} from "react";

const TodayPageContent = () => {
    const [dispatchGetToday, { data, isFetching }] = todoitemApi.useLazyGetTodayQuery();

    useEffect(() => {
        dispatchGetToday({});
    }, [])

    return (
        <PageContentInside title={'Today'} count={data?.count ?? 0}>
            <Vertical offset={5}>
                {
                    data ? data.list.map((item) => <TodoItem key={item.id} item={item}/>) : isFetching ? '' : 'not found'
                }
            </Vertical>
        </PageContentInside>
    );
};

export default TodayPageContent;