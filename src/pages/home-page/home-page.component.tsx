import Row from "../../components/ui/containers/row/row.component";
import Menu from "../../components/menu/menu.component";
import TodoCategoryItems from "../../components/todo-category-items/todo-category-items";
import React from "react";
import {Route, Routes } from "react-router-dom";
import TodoListItems from "../../components/todo-list-items/todo-list-items";

const HomePage = () => {
    return (
        <Row offset={20}>
            <Menu/>
            <Routes>
                <Route path={'/list/:id'} element={<TodoListItems/>}/>
                <Route path={'*'} element={<TodoCategoryItems/>}/>
            </Routes>
        </Row>
    );
};

export default React.memo(HomePage);