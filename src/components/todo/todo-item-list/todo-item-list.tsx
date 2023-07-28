import React from 'react';
import { ITodoList } from '../../../store/todolist/todolist.interface';
import Row from '../../ui/containers/row/row.component';
import css from './todo-item-list.module.scss';


export interface ITodoItemListProps {
    list: ITodoList;
}

const TodoItemList: React.FC<ITodoItemListProps> = (props) => {
    const { list } = props;
    return (
        <Row offset={ 5 } className={ css.container }>
            <div style={ { background: list.colorHex } }
                 className={ css.color }/>
            <div className={ css.title }>{ list.title }</div>
        </Row>
    );
};

export default TodoItemList;