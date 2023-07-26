import React from 'react';
import Button from '../../ui/buttons/button/button.component';
import { todolistApi } from '../../../store/todolist/todolist.api';
import { useActions } from '../../../hooks/redux/use-actions.hook';
import { ITodoListCreate } from '../../../store/todolist/todolist.interface';
import { toast } from 'react-hot-toast';
import Row from '../../ui/containers/row/row.component';
import { TfiWrite } from 'react-icons/tfi';


interface ITodoListCreateButtonProps {
    data: ITodoListCreate,
}

const TodoListCreateButton: React.FC<ITodoListCreateButtonProps> = (props) => {
    const { data }                           = props;
    const [ dispatchCreate, { isFetching } ] = todolistApi.useLazyCreateQuery();
    const { todolist }                       = useActions();

    const createList = function () {
        dispatchCreate(data).then((response) => {
            response.data && (todolist.add(response.data) && toast.success(`List [${ data.title }] created`, {
                duration : 2000,
                position : 'bottom-right',
                className: 'toast-container',
            }));
        });
    };

    return (
        <Button active
                loading={ isFetching }
                onClick={ createList }
        >
            <Row offset={10}><TfiWrite/><span>Create</span></Row>
        </Button>
    );
};

export default TodoListCreateButton;