import React from "react";
import {ITodoItem} from "../../store/todoitem/todoitem.interface";

export interface ITodoTaskProps extends React.HTMLAttributes<HTMLDivElement> {
    task: ITodoItem;        // Данные таска
}

const TodoTask: React.FC<ITodoTaskProps> = (props) => {
    return (
        <div>
            { props.task.title }
        </div>
    );
};

export default TodoTask;