import Button, {IButtonProps} from "../../ui/buttons/button/button.component";
import React from "react";
import {useActions} from "../../../hooks/redux/use-actions.hook";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {ITodoItem} from "../../../store/todoitem/todoitem.interface";

interface ITodoItemUpdateButton extends IButtonProps {
    taskId: number;
    data: Partial<ITodoItem>
}

const TodoItemUpdateButton: React.FC<ITodoItemUpdateButton> = (props) => {
    const {todoitem} = useActions();
    const [dispatchUpdate, { isFetching }] = todoitemApi.useLazyUpdateQuery();
    const updateTask = function () {
        dispatchUpdate({ id: props.taskId, body: props.data })
            .then(() => todoitem.patch([ props.taskId, props.data ]))
    }

    return (
        <Button
            active
            loading={isFetching}
            onClick={updateTask}
        >
            Update
        </Button>
    );
};

export default TodoItemUpdateButton;