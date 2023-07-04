import React from "react";
import {ITodoItem} from "../../store/todoitem/todoitem.interface";
import Vertical from "../ui/containers/vertical/vertical.component";
import TodoTask from "../todo-task/todo-task";

export interface ITodoTasksProps extends React.HTMLAttributes<HTMLDivElement> {
    list: ITodoItem[];      // Список тасков
}

const TodoTasks: React.FC<ITodoTasksProps> = (props) => {
    return (
        <Vertical offset={10}>
            {
                props.list.map((task) => <TodoTask key={task.id} task={task}/>)
            }
        </Vertical>
    );
};

export default TodoTasks;