import PageContentInside from "../page-content-inside.component";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {useEffect} from "react";
import TodoItem from "../../todo-item/todo-item.component";
import Vertical from "../../ui/containers/vertical/vertical.component";

const CompletedPageContent = () => {
    const [dispatchGetCompleted, { data, isFetching }] = todoitemApi.useLazyGetCompletedQuery();

    useEffect(() => {
        dispatchGetCompleted({});
    }, [])

    return (
        <PageContentInside title={'Completed'} count={data?.count ?? 0}>
            <Vertical offset={5}>
                {
                    data ? data.list.map((item) => <TodoItem key={item.id} item={item}/>) : isFetching ? '' : 'not found'
                }
            </Vertical>
        </PageContentInside>
    );
};

export default CompletedPageContent;