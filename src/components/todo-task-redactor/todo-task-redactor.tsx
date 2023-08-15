import {
    ITodoItem,
    ITodoItemCreate,
} from '../../store/todoitem/todoitem.interface';
import React, { useMemo } from 'react';
import Vertical from '../ui/containers/vertical/vertical.component';
import { useSlice } from '../../hooks/redux/use-store.hook';
import { UseListSearch, useListSearch } from '../../hooks/use-list-search.hook';
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
import {
    IUseAntdSelect,
    useAntdSelect, UseAntdSelectOption,
} from '../../hooks/use-antd-select.hook';
import AntdSelect from '../ui/selects/antd-select/antd-select';
import {
    IUseAntdTimePicker,
    useAntdTimePicker,
} from '../../hooks/use-antd-time-picker.hook';
import AntdTimePicker from '../antd-time-picker/antd-time-picker';


export interface ITodoTaskRedactorProps {
    task: ITodoItem | null;
}

const TodoTaskRedactor: React.FC<ITodoTaskRedactorProps> = (props) => {
    const title: IUseAntdInput               = useAntdInput({
        maxLength   : 40,
        showCount   : true,
        initialState: props.task?.title,
        placeholder : 'title',
    });
    const description: IUseAntdTextarea      = useAntdTextarea({
        maxLength   : 200,
        showCount   : true,
        initialState: props.task?.description,
        placeholder : 'description',
    });
    const todolistSlice: ITodoListSlice      = useSlice((state) => state.todolist);
    const listSearch: UseListSearch          = useListSearch();
    const list: ITodoList | undefined        = useMemo(() => listSearch(props.task?.todo_list_id ?? 0), [ props.task ]);
    const listOptions: UseAntdSelectOption[] = useMemo(
        () => todolistSlice.lists.map((list: ITodoList) => ({
            value: `${ list.id }`, label: list.title,
        })), [ list, todolistSlice.lists ],
    );
    const status: IUseCheckbox               = useCheckbox(props.task?.status ?? false, () => {
    }, [ props.task ]);
    const miniCalendar: IUseMiniCalendar     = useMiniCalendar({
        initialValue: props.task?.completion_date,
        resetId     : props.task?.id,
    });
    const todolistSelect: IUseAntdSelect     = useAntdSelect({
        options     : listOptions,
        defaultValue: props.task?.todo_list_id ? `${ props.task.todo_list_id }`
                                               : undefined,
        placeholder : 'List',
        allowClear  : true,
    });
    const timePicker: IUseAntdTimePicker     = useAntdTimePicker({
        defaultValue: props.task?.completion_date,
        disabled    : !miniCalendar.selectedDate,
    });

    const tododata: ITodoItemCreate = useMemo(() => {
        const data: ITodoItemCreate = {
            title       : title.value,
            description : description.value,
            todo_list_id: todolistSelect.value ? +todolistSelect.value
                                               : undefined,
            status      : status.status,
        };

        if (miniCalendar.selectedDate !== null) {
            const calendarDate: Date = miniCalendar.selectedDate as Date;

            calendarDate.setHours(timePicker.value?.hour() ?? 0);
            calendarDate.setMinutes(timePicker.value?.minute() ?? 0);
            calendarDate.setSeconds(timePicker.value?.second() ?? 0);
            data.completion_date = calendarDate.toISOString();
        }

        return data;
    }, [ title, description, todolistSelect, status.status, miniCalendar.selectedDate ]);


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
                opened={ true }
                label={ 'Time' }
            >
                <Vertical offset={ 10 }>
                    <AntdTimePicker hook={ timePicker }/>
                    <MiniCalendar hook={ miniCalendar }/>
                </Vertical>
            </Collapse>
            <Collapse label={ 'Status' }>
                <Vertical offset={ 7 }>
                    <Checkbox hook={ status }/>
                </Vertical>
            </Collapse>
            <Collapse label={ 'List' }>
                <AntdSelect hook={ todolistSelect }/>
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