import PageContentInside from "../page-content-inside.component";
import {useStore} from "../../../hooks/redux/use-store.hook";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {useEffect} from "react";

const AllPageContent = () => {
    const todoItemSlice = useStore((state) => state.todoitem);
    const [dispatchGetMy, { data }] = todoitemApi.useLazyGetMyQuery();

    useEffect(() => {
        dispatchGetMy({});
    }, [])

    return (
        <PageContentInside title={'All'} count={todoItemSlice.data.all}>
            {
                data ? data.list.map((item) => <div key={item.id}>[{ item.id }] { item.title }</div>) : 'not found'
            }
        </PageContentInside>
    );
};

export default AllPageContent;