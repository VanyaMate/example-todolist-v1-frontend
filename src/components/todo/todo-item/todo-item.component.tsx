import Row from '../../ui/containers/row/row.component';
import Vertical from '../../ui/containers/vertical/vertical.component';
import Checkbox from '../../ui/buttons/checkbox/checkbox.component';
import React, { useCallback, useMemo } from 'react';
import { ITodoItem } from '../../../store/todoitem/todoitem.interface';
import { useSlice } from '../../../hooks/redux/use-store.hook';
import Theme from '../../ui/containers/theme/theme.component';
import css from './todo-item.module.scss';
import ItemDate from '../item-date/item-date.component';
import { useCheckbox } from '../../../hooks/use-checkbox.hook';
import { useActions } from '../../../hooks/redux/use-actions.hook';
import { todoitemApi } from '../../../store/todoitem/todoitem.api';
import { cn } from '../../../helpers/react.helper';
import { BiRightArrow, BiSolidRightArrow } from 'react-icons/bi';
import { RedactorType } from '../../../store/redactor/redactor.slice';
import TodoItemSeparator from '../todo-item-separator/todo-item-separator';
import TodoItemList from '../todo-item-list/todo-item-list';
import { getWordsWithEllipsis } from '../../../helpers/string.helper';


export interface ITodoItemProps {
    item: ITodoItem;
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
    const { item }                           = props;
    const { todoitem, redactor }             = useActions();
    const [ dispatchUpdate, { isFetching } ] = todoitemApi.useLazyUpdateQuery();
    const status                             = useCheckbox(item.status, (status) => {
        todoitem.patch([ item.id, { status } ]);
        dispatchUpdate({ id: item.id, body: { status } })
            .then(() => todoitem.patch([ item.id, { status } ]))
            .catch(() => todoitem.patch([ item.id, { status: !status } ]));
    });
    const todolistSlice                      = useSlice((state) => state.todolist);
    const list                               = useMemo(
        () => todolistSlice.lists.filter((list) => list.id === item.todo_list_id)[0],
        [ item, todolistSlice.lists ],
    );
    const redactorSlice                      = useSlice((state) => state.redactor);
    const selectedCurrentItem                = useMemo(
        () => redactorSlice.opened && redactorSlice.redactorType === RedactorType.TASK && redactorSlice.item?.id === item.id,
        [ redactorSlice, item.id ],
    );
    const selectItem                         = useCallback(() => {
        redactor.setItem(item);
    }, [ item ]);

    return (
        <Theme
            css={ css }
            className={ cn(
                item.status ? css.completed : undefined,
                isFetching ? css.loading : undefined,
                selectedCurrentItem ? css.selected : '',
            ) }
            onClick={ selectItem }
        >
            <Row offset={ 15 }
                 className={ css.row }
            >
                <Row offset={ item.status ? 25 : 15 }>
                    <Checkbox hook={ status }/>
                    <Vertical offset={ 7 }>
                        <div className={ css.title }>{ item.title }</div>
                        { item.description ? <div
                                               className={ css.desc }>{ getWordsWithEllipsis(item.description, 150) }</div>
                                           : '' }
                        <TodoItemSeparator>
                            { list ? <TodoItemList list={ list }/> : '' }
                            <ItemDate date={ item.completion_date }/>
                        </TodoItemSeparator>
                    </Vertical>
                </Row>
                {
                    selectedCurrentItem
                    ? <BiSolidRightArrow className={ css.icon }/>
                    : <BiRightArrow className={ css.icon }/>
                }
            </Row>
        </Theme>
    );
};

export default TodoItem;