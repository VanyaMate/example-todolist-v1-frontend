import { ITodoItem, ITodoItemCreate } from '../../store/todoitem/todoitem.interface';
import React, { useMemo } from 'react';
import { IUseInput, useInput } from '../../hooks/use-input.hook';
import Input from '../ui/inputs/input/input.component';
import TitleSection from '../title-section/title-section';
import Vertical from '../ui/containers/vertical/vertical.component';
import { IUseSelect, IUseSelectItem, useSelect } from '../../hooks/use-select.hook';
import { useSlice } from '../../hooks/redux/use-store.hook';
import { UseListSearch, useListSearch } from '../../hooks/use-list-search.hook';
import ListSelect from '../ui/selects/select/list-select';
import TodoItemDeleteButton from '../todo/todo-item-delete-button/todo-item-delete-button';
import Row from '../ui/containers/row/row.component';
import TodoItemCreateButton from '../todo/todo-item-create-button/todo-item-create-button';
import TodoItemUpdateButton from '../todo/todo-item-update-button/todo-item-update-button';
import { ITodoListSlice } from '../../store/todolist/todolist.slice';
import { ITodoList } from '../../store/todolist/todolist.interface';


export interface ITodoTaskRedactorProps {
    task: ITodoItem | null;
}

const TodoTaskRedactor: React.FC<ITodoTaskRedactorProps> = (props) => {
    const title: IUseInput<string>       = useInput<string>(props.task?.title ?? '');
    const description: IUseInput<string> = useInput<string>(props.task?.description ?? '');
    const todolistSlice: ITodoListSlice  = useSlice((state) => state.todolist);
    const listSearch: UseListSearch      = useListSearch();
    const list: ITodoList | undefined    = useMemo(() => listSearch(props.task?.todo_list_id ?? 0), [ props.task ]);
    const listOptions: IUseSelectItem[]  = useMemo(
        () => todolistSlice.lists.map((list: ITodoList) => ({ value: list.id, title: list.title })),
        [ list, todolistSlice.lists ],
    );
    const todolists: IUseSelect          = useSelect({
        options: listOptions,
        default: list ? list.id : 0,
    }, [ props.task ]);

    const tododata: ITodoItemCreate = useMemo(() => ({
        title       : title.value,
        description : description.value,
        todo_list_id: todolists.value,
    }), [ title, description, todolists ]);

    return (
        <TitleSection title={ 'task redactor' }>
            <Vertical offset={ 7 }>
                <Input hook={ title }
                       placeholder={ 'title' }
                />
                <Input hook={ description }
                       placeholder={ 'description' }
                />
                <ListSelect hook={ todolists }/>
                {
                    props.task ?
                    <Row offset={ 10 }>
                        <TodoItemDeleteButton taskId={ props.task.id }/>
                        <TodoItemUpdateButton taskId={ props.task.id }
                                              data={ tododata }
                        />
                    </Row> :
                    <TodoItemCreateButton data={ tododata }/>
                }
            </Vertical>
        </TitleSection>
    );
};

export default TodoTaskRedactor;