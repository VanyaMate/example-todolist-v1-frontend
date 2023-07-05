import css from './content.module.scss';
import Theme from "../../ui/containers/theme/theme.component";
import {Route, Routes} from 'react-router-dom';
import HomePage from "../../../pages/home-page/home-page.component";
import LoginPage from "../../../pages/login-page/login-page.component";

const Content = () => {
    return (
        <Theme css={css}>
            <Routes>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/list/:id'} element={<HomePage/>}/>
                <Route path={'*'} element={<HomePage/>}/>
            </Routes>
        </Theme>
    );
};

export default Content;