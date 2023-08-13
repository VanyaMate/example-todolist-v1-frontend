import {
    ITodoItem,
    ITodoItemCreate,
} from '../../store/todoitem/todoitem.interface';
import React, { useMemo } from 'react';
import Vertical from '../ui/containers/vertical/vertical.component';
import {
    IUseSelect,
    IUseSelectItem,
    useSelect,
} from '../../hooks/use-select.hook';
import { useSlice } from '../../hooks/redux/use-store.hook';
import { UseListSearch, useListSearch } from '../../hooks/use-list-search.hook';
import ListSelect from '../ui/selects/select/list-select';
import TodoItemDeleteButton
    from '../todo/todo-item-delete-button/todo-item-delete-button';
import Row from '../ui/containers/row/row.component';
import TodoItemCreateButton
    from '../todo/todo-item-create-button/todo-item-create-button';
import TodoItemUpdateButton
    from '../todo/todo-item-update-button/todo-item-update-button';
import { ITodoListSlice } from '../../store/todolist/todolist.slice';
import { ITodoList } from '../../store/todolist/todolist.interface';
import Checkbox from '../ui/buttons/checkbox/checkbox.component';
import { IUseCheckbox, useCheckbox } from '../../hooks/use-checkbox.hook';
import 'react-calendar/dist/Calendar.css';
import {
    IUseMiniCalendar,
    useMiniCalendar,
} from '../../hooks/use-mini-calendar.hook';
import MiniCalendar from '../mini-calendar/mini-calendar';
import Collapse from '../ui/collapses/collapse-antd/collapse';
import {
    IUseAntdTextarea,
    useAntdTextarea,
} from '../../hooks/use-antd-textarea.hook';
import AntdTextarea from '../ui/inputs/textarea-antd/antd-textarea';
import { IUseAntdInput, useAntdInput } from '../../hooks/use-antd-input.hook';
import AntdInput from '../ui/inputs/antd-input/antd-input';


export interface ITodoTaskRedactorProps {
    task: ITodoItem | null;
}

const TodoTaskRedactor: React.FC<ITodoTaskRedactorProps> = (props) => {
    const title: IUseAntdInput           = useAntdInput({
        maxLength   : 40,
        showCount   : true,
        initialState: props.task?.title,
        placeholder : 'title',
    });
    const description: IUseAntdTextarea  = useAntdTextarea({
        maxLength   : 200,
        showCount   : true,
        initialState: props.task?.description,
        placeholder : 'description',
    });
    const todolistSlice: ITodoListSlice  = useSlice((state) => state.todolist);
    const listSearch: UseListSearch      = useListSearch();
    const list: ITodoList | undefined    = useMemo(() => listSearch(props.task?.todo_list_id ?? 0), [ props.task ]);
    const listOptions: IUseSelectItem[]  = useMemo(
        () => todolistSlice.lists.map((list: ITodoList) => ({
            value: list.id, title: list.title,
        })),
        [ list, todolistSlice.lists ],
    );
    const status: IUseCheckbox           = useCheckbox(props.task?.status ?? false, () => {
    }, [ props.task ]);
    const todolists: IUseSelect          = useSelect({
        options: listOptions,
        default: list ? list.id : 0,
    }, [ props.task ]);
    const miniCalendar: IUseMiniCalendar = useMiniCalendar({
        initialValue: props.task?.completion_date,
        resetId     : props.task?.id,
    });

    const tododata: ITodoItemCreate = useMemo(() => {
        const data: ITodoItemCreate = {
            title       : title.value,
            description : description.value,
            todo_list_id: todolists.value,
            status      : status.status,
        };

        if (miniCalendar.selectedDate !== null) {
            data.completion_date = (miniCalendar.selectedDate as Date).toISOString();
        }

        return data;
    }, [ title, description, todolists, status.status, miniCalendar.selectedDate ]);

    return (
        <Vertical offset={ 14 }>
            <Collapse
                opened={ true }
                label={ 'general' }
            >
                <Vertical offset={ 7 }>
                    <AntdInput hook={ title }/>
                    <AntdTextarea hook={ description }/>
                </Vertical>
            </Collapse>
            <Collapse
                opened={ false }
                label={ 'time' }
            >
                <MiniCalendar hook={ miniCalendar }/>
            </Collapse>
            <Collapse label={ 'Status' }>
                <Vertical offset={ 7 }>
                    <Checkbox hook={ status }/>
                </Vertical>
            </Collapse>
            <Collapse label={ 'List' }>
                <ListSelect hook={ todolists }/>
            </Collapse>
            <Collapse label={ 'Tags' }>
                <Vertical offset={ 7 }>

                </Vertical>
            </Collapse>
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
    );
};

export default TodoTaskRedactor;