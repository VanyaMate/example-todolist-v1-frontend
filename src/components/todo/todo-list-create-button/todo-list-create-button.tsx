import React from 'react';
import Button from '../../ui/buttons/button/button.component';
import { todolistApi } from '../../../store/todolist/todolist.api';
import { useActions } from '../../../hooks/redux/use-actions.hook';
import { ITodoListCreate } from '../../../store/todolist/todolist.interface';


interface ITodoListCreateButtonProps {
    data: ITodoListCreate,
}

const TodoListCreateButton: React.FC<ITodoListCreateButtonProps> = (props) => {
    const { data }                           = props;
    const [ dispatchCreate, { isFetching } ] = todolistApi.useLazyCreateQuery();
    const { todolist }                       = useActions();

    const createList = function () {
        dispatchCreate(data).then((response) => {
            response.data && todolist.add(response.data);
        });
    };

    return (
        <Button active
                loading={ isFetching }
                onClick={ createList }
        >Create</Button>
    );
};

export default TodoListCreateButton;