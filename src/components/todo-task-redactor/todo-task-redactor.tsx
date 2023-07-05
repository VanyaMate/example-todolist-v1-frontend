import {ITodoItem} from "../../store/todoitem/todoitem.interface";
import React, {useMemo} from "react";
import {useInput} from "../../hooks/use-input.hook";
import Input from "../ui/inputs/input/input.component";
import TitleSection from "../title-section/title-section";
import Vertical from "../ui/containers/vertical/vertical.component";
import {useSelect} from "../../hooks/use-select.hook";
import {useSlice} from "../../hooks/redux/use-store.hook";
import {useListSearch} from "../../hooks/use-list-search.hook";
import ListSelect from "../ui/selects/select/list-select";
import TodoItemDeleteButton from "../todo/todo-item-delete-button/todo-item-delete-button";
import Row from "../ui/containers/row/row.component";
import TodoItemCreateButton from "../todo/todo-item-create-button/todo-item-create-button";
import TodoItemUpdateButton from "../todo/todo-item-update-button/todo-item-update-button";

export interface ITodoTaskRedactorProps {
    task: ITodoItem | null
}

const TodoTaskRedactor: React.FC<ITodoTaskRedactorProps> = (props) => {
    const title =           useInput<string>(props.task?.title ?? '');
    const description =     useInput<string>(props.task?.description ?? '');
    const todolistSlice =   useSlice((state) => state.todolist);
    const listSearch =      useListSearch();
    const list =            useMemo(() => listSearch(props.task?.todo_list_id ?? 0), [props.task]);
    const listOptions =     useMemo(
                                () => todolistSlice.lists.map((list) => ({ value: list.id, title: list.title })),
                                [list, todolistSlice.lists]
                            );
    const todolists =       useSelect({
                                options: listOptions,
                                default: list ? list.id : 0,
                            })

    const tododata =        useMemo(() => ({
                                title: title.value,
                                description: description.value,
                                todo_list_id: todolists.value,
                            }), [title, description, todolists]);

    return (
        <TitleSection title={'task redactor'}>
            <Vertical offset={7}>
                <Input hook={title} placeholder={'title'}/>
                <Input hook={description} placeholder={'description'}/>
                <ListSelect hook={todolists}/>
                {
                    props.task ?
                        <Row offset={10}>
                            <TodoItemDeleteButton taskId={props.task.id}/>
                            <TodoItemUpdateButton taskId={props.task.id} data={tododata}/>
                        </Row> :
                        <TodoItemCreateButton data={tododata}/>
                }
            </Vertical>
        </TitleSection>
    );
};

export default TodoTaskRedactor;