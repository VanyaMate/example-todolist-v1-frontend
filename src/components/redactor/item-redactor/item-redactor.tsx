import Vertical from "../../ui/containers/vertical/vertical.component";
import {useSlice} from "../../../hooks/redux/use-store.hook";
import Input from "../../ui/inputs/input/input.component";
import {useInput} from "../../../hooks/use-input.hook";
import ListSelect from "../../ui/selects/select/list-select";
import {useSelect} from "../../../hooks/use-select.hook";
import {useMemo} from "react";
import Row from "../../ui/containers/row/row.component";
import TodoItemDeleteButton from "../../todo/todo-item-delete-button/todo-item-delete-button";
import TodoItemUpdateButton from "../../todo/todo-item-update-button/todo-item-update-button";
import TodoItemCreateButton from "../../todo/todo-item-create-button/todo-item-create-button";

const ItemRedactor = () => {
    const redactorSlice = useSlice((state) => state.redactor);
    const todolists = useSlice((state) => state.todolist);
    const item = useMemo(() => redactorSlice.item, [redactorSlice.item]);
    const itemTitle = useInput<string>(item?.title ? item.title : '');
    const itemDescription = useInput<string>(item?.description ? item.description : '');
    const defaultList = useMemo(() => ({ value: item?.todo_list_id ?? -1, title: '' }), [item]);
    const lists = useSelect({
        options: [{ value: -1, title: 'No list' }].concat(todolists.lists.map((list) => ({ value: list.id, title: list.title }))),
        default: item ? defaultList : undefined,
    });

    return (
        <Vertical offset={10}>
            <Input hook={itemTitle} placeholder={'title'}/>
            <Input hook={itemDescription} placeholder={'description'}/>
            <ListSelect hook={lists}/>
            <Row offset={10}>
                {
                    item ?
                        <>
                            <TodoItemDeleteButton taskId={item.id}/>
                            <TodoItemUpdateButton taskId={item.id} data={{
                                title: itemTitle.value,
                                description: itemDescription.value,
                                todo_list_id: Number(lists.value),
                            }}/>
                        </>
                        :
                        <TodoItemCreateButton data={{
                            title: itemTitle.value,
                            description: itemDescription.value,
                            todo_list_id: lists.value !== -1 ? Number(lists.value) : null,
                        }}/>
                }
            </Row>
        </Vertical>
    );
};

export default ItemRedactor;