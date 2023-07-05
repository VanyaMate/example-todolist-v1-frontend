import React from "react";
import {ITodoItem} from "../../store/todoitem/todoitem.interface";
import HoverBox from "../ui/containers/hover-box/hover-box";
import {useActions} from "../../hooks/redux/use-actions.hook";

export interface ITodoTaskProps extends React.HTMLAttributes<HTMLDivElement> {
    task: ITodoItem;        // Данные таска
}

const TodoTask: React.FC<ITodoTaskProps> = (props) => {
    const {redactor} = useActions()
    const openRedactor = function () {
        redactor.setItem(props.task);
    }

    return (
        <HoverBox onClick={openRedactor}>
            { props.task.title }
        </HoverBox>
    );
};

export default TodoTask;