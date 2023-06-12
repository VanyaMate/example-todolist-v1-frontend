import css from './content.module.scss';
import Theme from "../../ui/containers/theme/theme.component";
import {Route, Routes} from 'react-router-dom';
import HomePage from "../../../pages/home-page/home-page.component";
import LoginPage from "../../../pages/login-page/login-page.component";
import Page404 from "../../../pages/404-page/page-404.component";

const Content = () => {
    return (
        <Theme css={css}>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<Page404/>}/>
            </Routes>
        </Theme>
    );
};

export default Content;