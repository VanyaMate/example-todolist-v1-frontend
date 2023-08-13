import React from 'react';
import { ITodoList } from '../../store/todolist/todolist.interface';
import Vertical from '../ui/containers/vertical/vertical.component';
import TodoListCreateButton
    from '../todo/todo-list-create-button/todo-list-create-button';
import TodoListUpdateButton
    from '../todo/todo-list-update-button/todo-list-update-button';
import TodoListDeleteButton
    from '../todo/todo-list-delete-button/todo-list-delete-button';
import Row from '../ui/containers/row/row.component';
import css from './todo-list-redactor.module.scss';
import AntdColorPicker from '../antd-color-picker/antd-color-picker';
import {
    IUseAntdColorPicker,
    useAntdColorPicker,
} from '../../hooks/use-antd-color-picker.hook';
import Collapse from '../ui/collapses/collapse-antd/collapse';
import { IUseAntdInput, useAntdInput } from '../../hooks/use-antd-input.hook';
import {
    IUseAntdTextarea,
    useAntdTextarea,
} from '../../hooks/use-antd-textarea.hook';
import AntdInput from '../ui/inputs/antd-input/antd-input';
import AntdTextarea from '../ui/inputs/textarea-antd/antd-textarea';


interface ITodoListRedactorProps {
    list: ITodoList | null;
}

const TodoListRedactor: React.FC<ITodoListRedactorProps> = (props) => {
    const { list }                      = props;
    const title: IUseAntdInput          = useAntdInput({
        initialState: props.list?.title ?? '',
        placeholder : 'title',
        showCount   : true,
        maxLength   : 40,
    });
    const description: IUseAntdTextarea = useAntdTextarea({
        initialState: props.list?.description ?? '',
        placeholder : 'description',
        showCount   : true,
        maxLength   : 200,
    });
    const color: IUseAntdColorPicker    = useAntdColorPicker({
        initialValue: props.list?.colorHex,
        showText    : true,
    });

    return (
        <Vertical offset={ 14 } className={ css.container }>
            <Collapse opened={ true } label={ 'general' }>
                <Vertical offset={ 7 }>
                    <AntdInput hook={ title }/>
                    <AntdTextarea hook={ description }/>
                </Vertical>
            </Collapse>
            <Collapse opened={ true } label={ 'Color' }>
                <AntdColorPicker hook={ color }/>
            </Collapse>
            {
                list
                ? <Row offset={ 5 }>
                    <TodoListDeleteButton listId={ list.id }/>
                    <TodoListUpdateButton data={ {
                        title      : title.value,
                        description: description.value,
                        colorHex   : color.value,
                    } }
                                          listId={ list.id }
                    />
                </Row>
                : <TodoListCreateButton data={ {
                    title      : title.value,
                    description: description.value,
                    colorHex   : color.value,
                } }
                />
            }
        </Vertical>
    );
};

export default TodoListRedactor;