import PageContentInside from "../page-content-inside.component";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {useEffect} from "react";
import Vertical from "../../ui/containers/vertical/vertical.component";
import TodoItem from "../../todo-item/todo-item.component";

const OverduePageContent = () => {
    const [dispatchGetOverdue, { data }] = todoitemApi.useLazyGetOverdueQuery();

    useEffect(() => {
        dispatchGetOverdue({});
    }, [])

    return (
        <PageContentInside title={'Overdue'} count={data?.count ?? 0}>
            <Vertical offset={5}>
                {
                    data ? data.list.map((item) => <TodoItem key={item.id} item={item}/>) : 'not found'
                }
            </Vertical>
        </PageContentInside>
    );
};

export default OverduePageContent;