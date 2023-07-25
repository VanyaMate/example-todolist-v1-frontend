import Button from '../ui/buttons/button/button.component';
import { useActions } from '../../hooks/redux/use-actions.hook';
import { useSlice } from '../../hooks/redux/use-store.hook';
import { cn } from '../../helpers/react.helper';
import css from './open-create-list-redactor-button.module.scss';
import { useMemo } from 'react';
import { RedactorType } from '../../store/redactor/redactor.slice';


const OpenCreateListRedactorButton = () => {
    const { redactor }  = useActions();
    const redactorSlice = useSlice(state => state.redactor);
    const active        = useMemo(
        () => !redactorSlice.list?.id && redactorSlice.redactorType === RedactorType.LIST,
        [ redactorSlice.list, redactorSlice.redactorType ],
    );

    return (
        <Button
            active
            onClick={ () => redactor.setList(null) }
            className={ cn(css.container, active ? css.active : '') }
        >
            Create list
        </Button>
    );
};

export default OpenCreateListRedactorButton;