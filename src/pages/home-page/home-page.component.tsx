import Row from "../../components/ui/containers/row/row.component";
import React from "react";
import MenuFixed from "../../components/menu-fixed/menu-fixed";
import TodoContent from "../../components/todo-content/todo-content";
import RedactorFixed from "../../components/redactor-fixed/redactor-fixed";

const HomePage = () => {
    return (
        <Row offset={20}>
            <MenuFixed/>
            <TodoContent/>
            <RedactorFixed/>
        </Row>
    );
};

export default React.memo(HomePage);