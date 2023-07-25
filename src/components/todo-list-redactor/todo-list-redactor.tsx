import React from 'react';
import { ITodoList } from '../../store/todolist/todolist.interface';
import TitleSection from '../title-section/title-section';
import Vertical from '../ui/containers/vertical/vertical.component';
import Input from '../ui/inputs/input/input.component';
import { IUseInput, useInput } from '../../hooks/use-input.hook';
import TodoListCreateButton from '../todo/todo-list-create-button/todo-list-create-button';
import TodoListUpdateButton from '../todo/todo-list-update-button/todo-list-update-button';
import TodoListDeleteButton from '../todo/todo-list-delete-button/todo-list-delete-button';
import Row from '../ui/containers/row/row.component';


interface ITodoListRedactorProps {
    list: ITodoList | null;
}

const TodoListRedactor: React.FC<ITodoListRedactorProps> = (props) => {
    const { list }                       = props;
    const title: IUseInput<string>       = useInput<string>(list?.title ?? '');
    const description: IUseInput<string> = useInput<string>(list?.description ?? '');

    return (
        <TitleSection title={ 'list redactor' }>
            <Vertical offset={ 7 }>
                <Input hook={ title }
                       placeholder={ 'title' }
                />
                <Input hook={ description }
                       placeholder={ 'description' }
                />
                {
                    list
                    ? <Row offset={ 5 }>
                        <TodoListDeleteButton listId={ list.id }/>
                        <TodoListUpdateButton data={ {
                            title: title.value, description: description.value,
                        } }
                                              listId={ list.id }
                        />
                    </Row>
                    : <TodoListCreateButton data={ {
                        title: title.value, description: description.value,
                    } }
                    />
                }
            </Vertical>
        </TitleSection>
    );
};

export default TodoListRedactor;