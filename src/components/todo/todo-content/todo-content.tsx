import Row from "../../ui/containers/row/row.component";
import {Route, Routes} from "react-router-dom";
import TodoListItems from "../todo-list-items/todo-list-items";
import TodoCategoryItems from "../todo-category-items/todo-category-items";
import Redactor from "../../redactor/redactor";
import css from './todo-content.module.scss';

const TodoContent = () => {
    return (
        <Row offset={20} className={css.container}>
            <Routes>
                <Route path={'/list/:id'} element={<TodoListItems/>}/>
                <Route path={'*'} element={<TodoCategoryItems/>}/>
            </Routes>
            <Redactor/>
        </Row>
    );
};

export default TodoContent;