import React from "react";
import TodoItem from "../todo-item/todo-item.component";
import {useSlice} from "../../../hooks/redux/use-store.hook";
import css from './todo-list-items.module.scss';
import {cn} from "../../../helpers/react.helper";
import Vertical from "../../ui/containers/vertical/vertical.component";
import PageContentInside from "../../page-content/page-content-inside.component";
import {useListTodoItem} from "../../../hooks/use-list-todo-item.hook";

const TodoListItems = () => {
    const {list, fetching, count} = useListTodoItem();
    const todoitems = useSlice((state) => state.todoitem);

    return (
        <PageContentInside title={list.title} count={count} className={cn(css.container, fetching ? css.loading : undefined)}>
            <Vertical offset={5}>
                { todoitems.list.map((item) => <TodoItem key={item.id} item={item}/>) }
            </Vertical>
        </PageContentInside>
    );
};

export default React.memo(TodoListItems);