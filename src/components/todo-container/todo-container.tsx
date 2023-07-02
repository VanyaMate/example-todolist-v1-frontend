import {usePageTodoItem} from "../../hooks/use-page-todoitem.hook";
import React from "react";

const TodoContainer = () => {
    const todoitems = usePageTodoItem();

    return (
        <div>
            { todoitems }
        </div>
    );
};

export default React.memo(TodoContainer);