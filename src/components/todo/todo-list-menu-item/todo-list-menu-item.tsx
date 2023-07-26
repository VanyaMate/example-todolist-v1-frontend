import React from 'react';
import { ITodoList } from '../../../store/todolist/todolist.interface';
import { URL_LIST } from '../../../constants/urls.constant';
import OpenEditListRedactorButton
    from './open-edit-list-redactor-button/open-edit-list-redactor-button';
import Row from '../../ui/containers/row/row.component';
import css from './todo-list-menu-item.module.scss';
import LinkColor from './color-link/color-link';


interface ITodoListMenuItem {
    list: ITodoList,
}

const TodoListMenuItem: React.FC<ITodoListMenuItem> = (props) => {
    const { list } = props;

    return (
        <Row offset={ 5 }
             className={ css.container }
        >
            <LinkColor color={ list.colorHex }
                       href={ URL_LIST + '/' + list.id }
                       title={ list.title }
            />
            <OpenEditListRedactorButton active
                                        list={ list }
            />
        </Row>
    );
};

export default TodoListMenuItem;