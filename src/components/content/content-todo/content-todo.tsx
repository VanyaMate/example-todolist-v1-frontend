import {Route, Routes} from "react-router-dom";
import LoginPage from "../../../pages/login-page/login-page.component";
import HomePage from "../../../pages/home-page/home-page.component";

const ContentTodo = () => {
    return (
        <Routes>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/list/:id'} element={<HomePage/>}/>
            <Route path={'*'} element={<HomePage/>}/>
        </Routes>
    );
};

export default ContentTodo;