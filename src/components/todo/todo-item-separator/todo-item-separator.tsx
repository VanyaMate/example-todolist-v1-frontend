import React from 'react';
import Theme from '../../ui/containers/theme/theme.component';
import css from './todo-item-separator.module.scss';


const TodoItemSeparator: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <Theme css={ css }>
            { props.children }
        </Theme>
    );
};

export default TodoItemSeparator;