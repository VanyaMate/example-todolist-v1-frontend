import Row from "../../components/ui/containers/row/row.component";
import Menu from "../../components/menu/menu.component";
import React from "react";
import TodoContent from "../../components/todo/todo-content/todo-content";

const HomePage = () => {
    return (
        <Row offset={20}>
            <Menu/>
            <TodoContent/>
        </Row>
    );
};

export default React.memo(HomePage);