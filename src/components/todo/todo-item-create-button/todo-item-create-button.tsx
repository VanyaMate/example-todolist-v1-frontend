import Button, { IButtonProps } from '../../ui/buttons/button/button.component';
import React from 'react';
import { todoitemApi } from '../../../store/todoitem/todoitem.api';
import { ITodoItemCreate } from '../../../store/todoitem/todoitem.interface';
import { toast } from 'react-hot-toast';
import Row from '../../ui/containers/row/row.component';
import { TfiWrite } from 'react-icons/tfi';


interface ITodoItemCreateButton extends IButtonProps {
    data: ITodoItemCreate;
}

const TodoItemCreateButton: React.FC<ITodoItemCreateButton> = (props) => {
    const [ dispatchCreate, { isFetching } ] = todoitemApi.useLazyCreateQuery();
    const createTask                         = function () {
        dispatchCreate(props.data)
            .then((response) => response.data && toast.success(`Todo [${ props.data.title }] created`, {
                duration : 2000,
                position : 'bottom-right',
                className: 'toast-container',
            }));
    };

    return (
        <Button
            active
            loading={ isFetching }
            onClick={ createTask }
        >
            <Row offset={10}><TfiWrite/><span>Create</span></Row>
        </Button>
    );
};

export default TodoItemCreateButton;