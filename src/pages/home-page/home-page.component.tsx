import Row from "../../components/ui/containers/row/row.component";
import Menu from "../../components/menu/menu.component";
import TodoContainer from "../../components/todo-container/todo-container";
import React from "react";

const HomePage = () => {
    return (
        <Row offset={20}>
            <Menu/>
            <TodoContainer/>
        </Row>
    );
};

export default React.memo(HomePage);