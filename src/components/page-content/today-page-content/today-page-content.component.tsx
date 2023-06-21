import PageContentInside from "../page-content-inside.component";
import {useStore} from "../../../hooks/redux/use-store.hook";

const TodayPageContent = () => {
    const todoItemSlice = useStore((state) => state.todoitem);

    return (
        <PageContentInside title={'Today'} count={todoItemSlice.data.today.length}>
            TodayPageContent
        </PageContentInside>
    );
};

export default TodayPageContent;