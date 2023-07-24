import React from 'react';
import { ITodoListCreate } from '../../../store/todolist/todolist.interface';
import Button from '../../ui/buttons/button/button.component';
import { todolistApi } from '../../../store/todolist/todolist.api';
import { useActions } from '../../../hooks/redux/use-actions.hook';


interface ITodoListUpdateButton {
    data: ITodoListCreate;
    listId: number;
}

const TodoListUpdateButton: React.FC<ITodoListUpdateButton> = (props) => {
    const { data, listId }                   = props;
    const [ dispatchUpdate, { isFetching } ] = todolistApi.useLazyUpdateQuery();
    const { todolist }                       = useActions();

    const updateList = function () {
        dispatchUpdate({ id: listId, body: data }).then((response) => {
            response.data && todolist.update(response.data);
        });
    };

    return (
        <Button active
                loading={ isFetching }
                onClick={ updateList }
        >
            Update
        </Button>
    );
};

export default TodoListUpdateButton;