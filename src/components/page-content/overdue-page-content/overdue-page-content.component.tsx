import PageContentInside from "../page-content-inside.component";
import {useStore} from "../../../hooks/redux/use-store.hook";

const OverduePageContent = () => {
    const todoItemSlice = useStore((state) => state.todoitem);

    return (
        <PageContentInside title={'Overdue'} count={todoItemSlice.data.overdue}>
            OverduePageContent
        </PageContentInside>
    );
};

export default OverduePageContent;