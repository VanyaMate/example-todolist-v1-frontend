import Row from "../ui/containers/row/row.component";
import Vertical from "../ui/containers/vertical/vertical.component";
import Checkbox from "../ui/buttons/checkbox/checkbox.component";
import React, {useMemo} from "react";
import {ITodoItem} from "../../store/todoitem/todoitem.interface";
import {useStore} from "../../hooks/redux/use-store.hook";
import Theme from "../ui/containers/theme/theme.component";
import css from './todo-item.module.scss';

export interface ITodoItemProps {
    item: ITodoItem
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
    const { item } = props;
    const todolistSlice = useStore((state) => state.todolist)
    const list = useMemo(
        () => todolistSlice.lists.filter((list) => list.id === item.todo_list_id)[0],
        []
    )

    return (
        <Theme css={css}>
            <Row offset={15}>
                <Checkbox active={item.status}/>
                <Vertical offset={10}>
                    <div>{item.title}</div>
                    <Row offset={5}>
                        <div>{item.completion_date}</div>
                        <div>{list.title}</div>
                    </Row>
                </Vertical>
                <div>[-]</div>
            </Row>
        </Theme>
    );
};

export default TodoItem;