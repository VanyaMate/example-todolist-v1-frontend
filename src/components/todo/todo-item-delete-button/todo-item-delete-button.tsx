import Button, {IButtonProps} from "../../ui/buttons/button/button.component";
import React from "react";
import {useActions} from "../../../hooks/redux/use-actions.hook";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";

interface ITodoItemDeleteButton extends IButtonProps {
    taskId: number;
}

const TodoItemDeleteButton: React.FC<ITodoItemDeleteButton> = (props) => {
    const {todoitem} = useActions();
    const [dispatchDelete, { isFetching }] = todoitemApi.useLazyDeleteQuery();
    const deleteTask = function () {
        dispatchDelete({ id: props.taskId })
            .then(() => todoitem.remove(props.taskId))
    }

    return (
        <Button
            active
            loading={isFetching}
            onClick={deleteTask}
        >
            Delete
        </Button>
    );
};

export default TodoItemDeleteButton;