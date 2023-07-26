import React, { useMemo } from 'react';
import Button, { IButtonProps } from '../../../ui/buttons/button/button.component';
import { useActions } from '../../../../hooks/redux/use-actions.hook';
import { ITodoList } from '../../../../store/todolist/todolist.interface';
import css from './open-edit-list-redactor-button.module.scss';
import { BiPencil } from 'react-icons/bi';
import { useSlice } from '../../../../hooks/redux/use-store.hook';
import { cn } from '../../../../helpers/react.helper';
import { RedactorType } from '../../../../store/redactor/redactor.slice';


interface IOpenEditListRedactorButton extends IButtonProps {
    list: ITodoList;
}

const OpenEditListRedactorButton: React.FC<IOpenEditListRedactorButton> = (props) => {
    const { list, children, ...other } = props;
    const { redactor }                 = useActions();
    const redactorSlice                = useSlice((state) => state.redactor);
    const selected                     = useMemo(() => {
        return redactorSlice.list?.id === list.id && redactorSlice.opened && redactorSlice.redactorType === RedactorType.LIST;
    }, [ redactorSlice.list, redactorSlice.opened, list, redactorSlice.redactorType ]);

    const openRedactor = function () {
        redactor.setList(list);
    };

    return (
        <Button { ...other }
                onClick={ openRedactor }
                className={ cn(css.container, selected ? css.active : '') }
        >
            <BiPencil size={ 16 }/>
        </Button>
    );
};

export default OpenEditListRedactorButton;