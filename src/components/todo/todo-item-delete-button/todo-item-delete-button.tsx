import Button, { IButtonProps } from '../../ui/buttons/button/button.component';
import React from 'react';
import { useActions } from '../../../hooks/redux/use-actions.hook';
import { todoitemApi } from '../../../store/todoitem/todoitem.api';
import { toast } from 'react-hot-toast';
import Row from '../../ui/containers/row/row.component';
import { MdDelete } from 'react-icons/md';


interface ITodoItemDeleteButton extends IButtonProps {
    taskId: number;
}

const TodoItemDeleteButton: React.FC<ITodoItemDeleteButton> = (props) => {
    const { todoitem, search }               = useActions();
    const [ dispatchDelete, { isFetching } ] = todoitemApi.useLazyDeleteQuery();
    const deleteTask                         = function () {
        dispatchDelete({ id: props.taskId })
            .then(() => todoitem.remove(props.taskId) && toast.success(`Todo deleted`, {
                duration : 2000,
                position : 'bottom-right',
                className: 'toast-container',
            }))
            .then(() => search.resetCurrentOptions());
    };

    return (
        <Button
            active
            loading={ isFetching }
            onClick={ deleteTask }
        >
            <Row offset={ 5 }><MdDelete/><span>Delete</span></Row>
        </Button>
    );
};

export default TodoItemDeleteButton;