import css from './app.module.scss';
import './styles/index.scss';
import './styles/fonts.scss';
import Content from "./components/page-elements/content/content.component";
import Footer from "./components/page-elements/footer/footer.component";
import Theme from "./components/ui/containers/theme/theme.component";
import Vertical from "./components/ui/containers/vertical/vertical.component";
import {useRefreshAfterReloading} from "./hooks/use-refresh-after-reloading.hook";

const App = () => {
    useRefreshAfterReloading();

    return (
        <Theme css={css}>
            <Vertical offset={5} className={css.content}>
                <Content/>
                <Footer/>
            </Vertical>
        </Theme>
    );
};

export default App;