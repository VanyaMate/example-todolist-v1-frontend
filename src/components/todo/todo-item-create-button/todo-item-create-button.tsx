import Button, {IButtonProps} from "../../ui/buttons/button/button.component";
import React from "react";
import {useActions} from "../../../hooks/redux/use-actions.hook";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {ITodoItemCreate} from "../../../store/todoitem/todoitem.interface";

interface ITodoItemCreateButton extends IButtonProps {
    data: ITodoItemCreate;
}

const TodoItemCreateButton: React.FC<ITodoItemCreateButton> = (props) => {
    const {todoitem} = useActions();
    const [dispatchCreate, { isFetching }] = todoitemApi.useLazyCreateQuery();
    const createTask = function () {
        dispatchCreate(props.data)
            .then((response) => response.data && todoitem.addFirst(response.data))
    }

    return (
        <Button
            active
            loading={isFetching}
            onClick={createTask}
        >
            Create
        </Button>
    );
};

export default TodoItemCreateButton;