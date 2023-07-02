import PageContentInside from "../page-content-inside.component";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {useEffect} from "react";
import TodoItem from "../../todo-item/todo-item.component";
import Vertical from "../../ui/containers/vertical/vertical.component";
import {useActions} from "../../../hooks/redux/use-actions.hook";

const AllPageContent = () => {
    const [dispatchGetMy, { data, isFetching }] = todoitemApi.useLazyGetMyQuery();
    const {todoitem} = useActions();

    useEffect(() => {
        dispatchGetMy({}).then((response) => {
            if (response.data) {
                todoitem.set(response.data.list);
            }
        });
    }, [])

    return (
        <PageContentInside title={'All'} count={data?.count ?? 0}>
            <Vertical offset={5}>
                {
                    data ? data.list.map((item) => <TodoItem key={item.id} item={item}/>) : isFetching ? '' : 'not found'
                }
            </Vertical>
        </PageContentInside>
    );
};

export default AllPageContent;