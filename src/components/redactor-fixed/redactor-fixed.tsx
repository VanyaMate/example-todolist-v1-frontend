import ContentHeight from '../content-height/content-height';
import Box from '../ui/containers/box/box.component';
import css from './redactor-fixed.module.scss';
import { useSlice } from '../../hooks/redux/use-store.hook';
import { cn } from '../../helpers/react.helper';
import Button from '../ui/buttons/button/button.component';
import { useActions } from '../../hooks/redux/use-actions.hook';
import Row from '../ui/containers/row/row.component';
import TitleBox from '../title-box/title-box';
import TodoTaskRedactor from '../todo-task-redactor/todo-task-redactor';
import { RedactorType } from '../../store/redactor/redactor.slice';
import TodoListRedactor from '../todo-list-redactor/todo-list-redactor';
import { useMemo } from 'react';


const RedactorFixed = () => {
    const redactorSlice  = useSlice((state) => state.redactor);
    const { redactor }   = useActions();
    const isTaskRedactor = useMemo(() => redactorSlice.redactorType === RedactorType.TASK, [ redactorSlice.redactorType ]);

    return (
        <ContentHeight
            className={ cn(css.container, redactorSlice.opened ? undefined : css.hidden) }
        >
            <Box className={ css.content }>
                <Row offset={ 15 }>
                    <TitleBox title={ isTaskRedactor ? 'Task redactor' : ' List redactor' }/>
                    <Button active
                            onClick={ () => redactor.setOpen(false) }
                    >Close</Button>
                </Row>
                {
                    isTaskRedactor
                    ? <TodoTaskRedactor task={ redactorSlice.item }/>
                    : <TodoListRedactor list={ redactorSlice.list }/>
                }
            </Box>
        </ContentHeight>
    );
};

export default RedactorFixed;