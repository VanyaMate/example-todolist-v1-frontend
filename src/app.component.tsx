import Header from "./components/page-elements/header/header.component";
import css from './app.module.scss';
import './styles/index.scss';
import './styles/fonts.scss';
import Content from "./components/page-elements/content/content.component";
import Footer from "./components/page-elements/footer/footer.component";
import Theme from "./components/ui/containers/theme/theme.component";
import Vertical from "./components/ui/containers/vertical/vertical.component";


const App = () => {
    return (
        <Theme css={css}>
            <Vertical offset={5} className={css.content}>
                <Vertical offset={5}>
                    <Header/>
                    <Content/>
                </Vertical>
                <Footer/>
            </Vertical>
        </Theme>
    );
};

export default App;