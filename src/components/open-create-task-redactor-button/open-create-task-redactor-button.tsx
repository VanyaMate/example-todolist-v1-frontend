import Button from '../ui/buttons/button/button.component';
import { useActions } from '../../hooks/redux/use-actions.hook';
import { useSlice } from '../../hooks/redux/use-store.hook';
import { useMemo } from 'react';
import { RedactorType } from '../../store/redactor/redactor.slice';
import { cn } from '../../helpers/react.helper';
import css from './open-create-task-redactor-button.module.scss';


const OpenCreateTaskRedactorButton = () => {
    const { redactor }  = useActions();
    const redactorSlice = useSlice(state => state.redactor);
    const active        = useMemo(
        () => !redactorSlice.item?.id && redactorSlice.redactorType === RedactorType.TASK && redactorSlice.opened,
        [ redactorSlice.item, redactorSlice.redactorType, redactorSlice.opened ],
    );

    return (
        <Button
            active
            onClick={ () => redactor.setItem(null) }
            className={ cn(css.container, active ? css.active : '') }
        >
            Create task
        </Button>
    );
};

export default OpenCreateTaskRedactorButton;