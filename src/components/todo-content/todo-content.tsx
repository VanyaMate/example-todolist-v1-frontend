import ContentHeight from "../content-height/content-height";
import css from './todo-content.module.scss';
import TitleWithCounter from "../title-with-counter/title-with-counter";
import TodoTasks from "../todo-tasks/todo-tasks";
import {IUseTodoContent, useTodoContent} from "../../hooks/use-todo-content.hook";
import {cn} from "../../helpers/react.helper";
import Vertical from "../ui/containers/vertical/vertical.component";

const TodoContent = () => {
    const {getter, title}: IUseTodoContent = useTodoContent();

    return (
        <ContentHeight className={cn(css.container, getter.fetching ? css.loading : undefined)}>
            <Vertical offset={20}>

                <TitleWithCounter title={title} counter={getter.count}/>
                <TodoTasks list={getter.list}/>
            </Vertical>
        </ContentHeight>
    );
};

export default TodoContent;