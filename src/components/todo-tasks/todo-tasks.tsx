import React from 'react';
import { ITodoItem } from '../../store/todoitem/todoitem.interface';
import Vertical from '../ui/containers/vertical/vertical.component';
import TodoItem from '../todo/todo-item/todo-item.component';


export interface ITodoTasksProps extends React.HTMLAttributes<HTMLDivElement> {
    list: ITodoItem[];      // Список тасков
}

const TodoTasks: React.FC<ITodoTasksProps> = (props) => {
    const { list, ...other } = props;
    return (
        <Vertical offset={ 5 } { ...other }>
            {
                list.map((task) => <TodoItem key={ task.id }
                                             item={ task }/>)
            }
        </Vertical>
    );
};

export default TodoTasks;