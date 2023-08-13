import css from './app.module.scss';
import './styles/index.scss';
import './styles/fonts.scss';
import './styles/toast.scss';
import Content from './components/page-elements/content/content.component';
import Footer from './components/page-elements/footer/footer.component';
import Theme from './components/ui/containers/theme/theme.component';
import Vertical from './components/ui/containers/vertical/vertical.component';
import {
    useRefreshAfterReloading,
} from './hooks/use-refresh-after-reloading.hook';
import ContentTodo from './components/content/content-todo/content-todo';
import ContentLoading
    from './components/content/content-loading/content-loading';
import ContentAuth from './components/content/content-auth/content-auth';
import { useSlice } from './hooks/redux/use-store.hook';
import { useEffect } from 'react';


const App = () => {
    const { refreshed, login } = useRefreshAfterReloading();
    const { theme }            = useSlice((state) => state.theme);

    useEffect(() => {
        const body: HTMLBodyElement | null = document.querySelector('body');
        if (body) {
            body.className = theme;
        }
    }, [ theme ]);

    return (
        <Theme css={ css }>
            <Vertical offset={ 5 } className={ css.content }>
                <Content>
                    {
                        !refreshed
                        ? <ContentLoading/>
                        : login === null
                          ? <ContentAuth/> //<ContentAuth/>
                          : <ContentTodo/> //<ContentTodo/>
                    }
                </Content>
                <Footer/>
            </Vertical>
        </Theme>
    );
};

export default App;