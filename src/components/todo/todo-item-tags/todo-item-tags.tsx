import React, { useCallback } from 'react';
import { ITodoItemTag } from '@/store/todoitem/todoitem.interface';
import css from './todo-item-tags.module.scss';
import TodoItemTag
    from '@/components/todo/todo-item-tags/todo-item-tag/todo-item-tag';


export interface ITodoItemTagsProps {
    taskId: number;
    tags: ITodoItemTag[];
    closeIcon?: boolean;
}

const TodoItemTags: React.FC<ITodoItemTagsProps> = (props: ITodoItemTagsProps) => {
    const onCloseHandler = useCallback<(tag: ITodoItemTag) => void>((tag) => {
        console.log('Remove', tag.id, 'from', props.taskId);
    }, [ props.taskId ]);

    const onClickHandler = useCallback<(tag: ITodoItemTag) => void>((tag) => {
        console.log('Open all tasks with tag: ', tag.id);
    }, [ props.taskId ]);

    return (
        <div className={ css.container }>
            {
                props.tags.map((tag: ITodoItemTag) => {
                    return <TodoItemTag
                        closeIcon={ props.closeIcon }
                        tag={ tag }
                        key={ tag.id }
                        onCloseHandler={ onCloseHandler }
                        onClickHandler={ onClickHandler }
                    />;
                })
            }
        </div>
    );
};

export default TodoItemTags;