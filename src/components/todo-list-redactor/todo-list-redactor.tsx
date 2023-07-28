import React, { useCallback, useEffect, useState } from 'react';
import { ITodoList } from '../../store/todolist/todolist.interface';
import TitleSection from '../title-section/title-section';
import Vertical from '../ui/containers/vertical/vertical.component';
import Input from '../ui/inputs/input/input.component';
import { IUseInput, useInput } from '../../hooks/use-input.hook';
import TodoListCreateButton from '../todo/todo-list-create-button/todo-list-create-button';
import TodoListUpdateButton from '../todo/todo-list-update-button/todo-list-update-button';
import TodoListDeleteButton from '../todo/todo-list-delete-button/todo-list-delete-button';
import Row from '../ui/containers/row/row.component';
import {
    ColorChangeHandler,
    ColorResult,
    SketchPicker,
} from 'react-color';
import css from './todo-list-redactor.module.scss';


interface ITodoListRedactorProps {
    list: ITodoList | null;
}

const TodoListRedactor: React.FC<ITodoListRedactorProps> = (props) => {
    const { list }                       = props;
    const title: IUseInput<string>       = useInput<string>(list?.title ?? '');
    const description: IUseInput<string> = useInput<string>(list?.description ?? '');
    const [ colorHex, setColorHex ]      = useState<string>(list?.colorHex ?? '#68F8F8');

    useEffect(() => {
        setColorHex(list?.colorHex ?? '#68F8F8');
    }, [ list ]);

    const handleChangeColor: ColorChangeHandler = useCallback((color: ColorResult) => {
        setColorHex(color.hex);
    }, [ colorHex ]);

    return (
        <Vertical offset={ 14 } className={css.container}>
            <TitleSection title={'General'}>
                <Vertical offset={7}>
                    <Input hook={ title }
                           placeholder={ 'title' }
                    />
                    <Input hook={ description }
                           placeholder={ 'description' }
                    />
                </Vertical>
            </TitleSection>
            <TitleSection title={'Color'}>
                <SketchPicker
                    color={ colorHex }
                    onChangeComplete={ handleChangeColor }
                    className={css.picker}
                />
            </TitleSection>
            {
                list
                ? <Row offset={ 5 }>
                    <TodoListDeleteButton listId={ list.id }/>
                    <TodoListUpdateButton data={ {
                        title: title.value, description: description.value, colorHex,
                    } }
                                          listId={ list.id }
                    />
                </Row>
                : <TodoListCreateButton data={ {
                    title: title.value, description: description.value, colorHex,
                } }
                />
            }
        </Vertical>
    );
};

export default TodoListRedactor;