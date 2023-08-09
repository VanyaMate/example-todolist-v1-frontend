import Button, { IButtonProps } from '../../ui/buttons/button/button.component';
import React, { useCallback } from 'react';
import { useActions } from '../../../hooks/redux/use-actions.hook';
import { todoitemApi } from '../../../store/todoitem/todoitem.api';
import { ITodoItem } from '../../../store/todoitem/todoitem.interface';
import { toast } from 'react-hot-toast';
import Row from '../../ui/containers/row/row.component';
import { RxUpdate } from 'react-icons/rx';
import { useSlice } from '../../../hooks/redux/use-store.hook';


interface ITodoItemUpdateButton extends IButtonProps {
    taskId: number;
    data: Partial<ITodoItem>;
}

const TodoItemUpdateButton: React.FC<ITodoItemUpdateButton> = (props) => {
    const {
              redactor: redactorSlice,
              todoitem: todoitemSlice,
          }                                  = useSlice((state) => state);
    const { todoitem, redactor }             = useActions();
    const [ dispatchUpdate, { isFetching } ] = todoitemApi.useLazyUpdateQuery();
    const updateTask                         = useCallback(() => {
        dispatchUpdate({ id: props.taskId, body: props.data })
            .then(() => {
                todoitem.patch([ props.taskId, props.data ]);
                toast.success(`Todo updated`, {
                    duration : 2000,
                    position : 'bottom-right',
                    className: 'toast-container',
                });

                const itemIndex: number = todoitemSlice.list.findIndex((item) => item.id === redactorSlice.item?.id);
                if (itemIndex > -1) {
                    redactor.setItem({ ...todoitemSlice.list[itemIndex], ...props.data });
                }
            });
    }, [ todoitemSlice, props, redactorSlice ]);

    return (
        <Button
            active
            loading={ isFetching }
            onClick={ updateTask }
        >
            <Row offset={ 5 }><RxUpdate/><span>Update</span></Row>
        </Button>
    );
};

export default TodoItemUpdateButton;