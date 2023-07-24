import React from 'react';
import { todolistApi } from '../../../store/todolist/todolist.api';
import Button from '../../ui/buttons/button/button.component';
import { useActions } from '../../../hooks/redux/use-actions.hook';


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
                todolist.remove(listId);
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