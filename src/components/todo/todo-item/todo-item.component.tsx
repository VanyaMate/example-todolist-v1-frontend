import Row from "../../ui/containers/row/row.component";
import Vertical from "../../ui/containers/vertical/vertical.component";
import Checkbox from "../../ui/buttons/checkbox/checkbox.component";
import React, {useCallback, useMemo} from "react";
import {ITodoItem} from "../../../store/todoitem/todoitem.interface";
import {useSlice} from "../../../hooks/redux/use-store.hook";
import Theme from "../../ui/containers/theme/theme.component";
import css from './todo-item.module.scss';
import ItemDate from "../item-date/item-date.component";
import {useCheckbox} from "../../../hooks/use-checkbox.hook";
import {useActions} from "../../../hooks/redux/use-actions.hook";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import {cn} from "../../../helpers/react.helper";

export interface ITodoItemProps {
    item: ITodoItem
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
    const { item } = props;
    const {todoitem, redactor} = useActions();
    const [dispatchUpdate, { isFetching }] = todoitemApi.useLazyUpdateQuery();
    const status = useCheckbox(item.status, (status) => {
        todoitem.patch([item.id, { status }])
        dispatchUpdate({ id: item.id, body: { status } })
            .then(() => todoitem.patch([item.id, { status }]))
            .catch(() => todoitem.patch([item.id, { status: !status }]))
    });
    const todolistSlice = useSlice((state) => state.todolist);
    const list = useMemo(
        () => todolistSlice.lists.filter((list) => list.id === item.todo_list_id)[0],
        [item]
    );
    const redactorSlice = useSlice((state) => state.redactor);

    const selectItem = useCallback(() => {
        redactor.setItem(item);
    }, [item]);

    return (
        <Theme
            css={css}
            className={cn(
                item.status ? css.completed : undefined,
                isFetching ? css.loading : undefined,
                (redactorSlice.opened && redactorSlice.item?.id === item.id) ? css.selected : '',
            )}
            onClick={selectItem}
        >
            <Row offset={15} className={css.row}>
                <Row offset={item.status ? 25 : 15}>
                    <Checkbox hook={status}/>
                    <Vertical offset={7}>
                        <div>{item.title}</div>
                        <Row offset={5}>
                            <ItemDate date={item.completion_date}/>
                            { list ? <div>{list.title}</div> : '' }
                        </Row>
                    </Vertical>
                </Row>
                <div>[-]</div>
            </Row>
        </Theme>
    );
};

export default TodoItem;