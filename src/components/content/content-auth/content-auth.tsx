import {Route, Routes} from "react-router-dom";
import LoginPage from "../../../pages/login-page/login-page.component";

const ContentAuth = () => {
    return (
        <Routes>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/registration'} element={<LoginPage/>}/>
            <Route path={'*'} element={<LoginPage/>}/>
        </Routes>
    );
};

export default ContentAuth;