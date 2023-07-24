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


const RedactorFixed = () => {
    const redactorSlice = useSlice((state) => state.redactor);
    const { redactor }  = useActions();

    return (
        <ContentHeight
            className={ cn(css.container, redactorSlice.opened ? undefined : css.hidden) }
        >
            <Box className={ css.content }>
                <Row offset={ 15 }>
                    <TitleBox title={ 'Redactor' }/>
                    <Button active
                            onClick={ () => redactor.setOpen(false) }
                    >Close</Button>
                </Row>
                {
                    redactorSlice.redactorType === RedactorType.TASK
                    ? <TodoTaskRedactor task={ redactorSlice.item }/>
                    : <TodoListRedactor list={ redactorSlice.list }/>
                }
            </Box>
        </ContentHeight>
    );
};

export default RedactorFixed;