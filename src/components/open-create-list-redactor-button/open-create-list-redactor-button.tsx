import Button from '../ui/buttons/button/button.component';
import { useActions } from '../../hooks/redux/use-actions.hook';
import { useSlice } from '../../hooks/redux/use-store.hook';
import { cn } from '../../helpers/react.helper';
import css from './open-create-list-redactor-button.module.scss';
import { useMemo } from 'react';
import { RedactorType } from '../../store/redactor/redactor.slice';
import Row from '../ui/containers/row/row.component';
import { IoList } from 'react-icons/io5';


const OpenCreateListRedactorButton = () => {
    const { redactor }  = useActions();
    const redactorSlice = useSlice(state => state.redactor);
    const active        = useMemo(
        () => !redactorSlice.list?.id && redactorSlice.redactorType === RedactorType.LIST && redactorSlice.opened,
        [ redactorSlice.list, redactorSlice.redactorType, redactorSlice.opened ],
    );

    return (
        <Button
            active
            onClick={ () => redactor.setList(null) }
            className={ cn(css.container, active ? css.active : '') }
        >
            <Row offset={10}><IoList/><span>Create list</span></Row>
        </Button>
    );
};

export default OpenCreateListRedactorButton;