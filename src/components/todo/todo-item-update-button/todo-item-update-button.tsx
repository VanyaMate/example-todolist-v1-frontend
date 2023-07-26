import Button, {IButtonProps} from "../../ui/buttons/button/button.component";
import React from "react";
import {useActions} from "../../../hooks/redux/use-actions.hook";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {ITodoItem} from "../../../store/todoitem/todoitem.interface";
import { toast } from 'react-hot-toast';
import Row from '../../ui/containers/row/row.component';
import { RxUpdate } from 'react-icons/rx';

interface ITodoItemUpdateButton extends IButtonProps {
    taskId: number;
    data: Partial<ITodoItem>
}

const TodoItemUpdateButton: React.FC<ITodoItemUpdateButton> = (props) => {
    const {todoitem} = useActions();
    const [dispatchUpdate, { isFetching }] = todoitemApi.useLazyUpdateQuery();
    const updateTask = function () {
        dispatchUpdate({ id: props.taskId, body: props.data })
            .then(() => todoitem.patch([ props.taskId, props.data ]) && toast.success(`Todo updated`, {
                duration : 2000,
                position : 'bottom-right',
                className: 'toast-container',
            }));
    }

    return (
        <Button
            active
            loading={isFetching}
            onClick={updateTask}
        >
            <Row offset={5}><RxUpdate/><span>Update</span></Row>
        </Button>
    );
};

export default TodoItemUpdateButton;