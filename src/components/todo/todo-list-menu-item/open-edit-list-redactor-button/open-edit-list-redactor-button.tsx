import React from 'react';
import Button, { IButtonProps } from '../../../ui/buttons/button/button.component';
import { useActions } from '../../../../hooks/redux/use-actions.hook';
import { ITodoList } from '../../../../store/todolist/todolist.interface';
import css from './open-edit-list-redactor-button.module.scss';
import { BiPencil } from 'react-icons/bi';


interface IOpenEditListRedactorButton extends IButtonProps {
    list: ITodoList;
}

const OpenEditListRedactorButton: React.FC<IOpenEditListRedactorButton> = (props) => {
    const { list, children, ...other } = props;
    const { redactor }                 = useActions();

    const openRedactor = function () {
        redactor.setList(list);
    };

    return (
        <Button { ...other } onClick={ openRedactor }
                className={ css.container }
        >
            <BiPencil size={16}/>
        </Button>
    );
};

export default OpenEditListRedactorButton;