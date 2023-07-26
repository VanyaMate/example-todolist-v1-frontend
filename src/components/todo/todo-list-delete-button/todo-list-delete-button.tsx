import React from 'react';
import { todolistApi } from '../../../store/todolist/todolist.api';
import Button from '../../ui/buttons/button/button.component';
import { useActions } from '../../../hooks/redux/use-actions.hook';
import { toast } from 'react-hot-toast';


interface ITodoListDeleteButtonProps {
    listId: number;
}

const TodoListDeleteButton: React.FC<ITodoListDeleteButtonProps> = (props) => {
    const { listId }                         = props;
    const [ dispatchDelete, { isFetching } ] = todolistApi.useLazyDeleteQuery();
    const { todolist }                       = useActions();

    const deleteList = function () {
        dispatchDelete(listId).then((response) => {
            if (response.data && response.data === 1) {
                todolist.remove(listId) && toast.success(`List deleted`, {
                    duration : 2000,
                    position : 'bottom-right',
                    className: 'toast-container',
                });
            }
        });
    };

    return (
        <Button active
                loading={ isFetching }
                onClick={ deleteList }
        >
            Delete
        </Button>
    );
};

export default TodoListDeleteButton;