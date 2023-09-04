import React from 'react';
import { ITodoItemTag } from '@/store/todoitem/todoitem.interface';
import css from './todo-item-tags.module.scss';
import TodoItemTag
    from '@/components/todo/todo-item-tags/todo-item-tag/todo-item-tag';


export interface ITodoItemTagsProps {
    taskId: number;
    tags: ITodoItemTag[];
}

const TodoItemTags: React.FC<ITodoItemTagsProps> = (props: ITodoItemTagsProps) => {
    return (
        <div className={ css.container }>
            {
                props.tags.map((tag) => {
                    return <TodoItemTag closeIcon tag={ tag } key={ tag.id }/>;
                })
            }
        </div>
    );
};

export default TodoItemTags;