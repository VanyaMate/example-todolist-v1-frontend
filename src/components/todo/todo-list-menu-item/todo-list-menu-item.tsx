import React from 'react';
import { ITodoList } from '../../../store/todolist/todolist.interface';
import LinkIcon from '../../link-icon/link-icon';
import { URL_LIST } from '../../../constants/urls.constant';
import OpenEditListRedactorButton
    from './open-edit-list-redactor-button/open-edit-list-redactor-button';
import Row from '../../ui/containers/row/row.component';
import css from './todo-list-menu-item.module.scss';


interface ITodoListMenuItem {
    list: ITodoList,
}

const TodoListMenuItem: React.FC<ITodoListMenuItem> = (props) => {
    const { list } = props;

    return (
        <Row offset={ 5 }
             className={ css.container }
        >
            <LinkIcon icon={ '/icons/delete.png' }
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