import {useSlice} from "../../hooks/redux/use-store.hook";
import {useActions} from "../../hooks/redux/use-actions.hook";
import Button from "../ui/buttons/button/button.component";
import {ThemeType} from "../../store/theme/theme.slice";
import cssContainer from './toggle-theme.module.scss';
import cssPoint from './toggle-theme-point.module.scss';
import Theme from "../ui/containers/theme/theme.component";

const ToggleTheme = () => {
    const themeStore = useSlice((state) => state.theme);
    const { theme } = useActions();

    const toggleTheme = function () {
        if (themeStore.theme === ThemeType.DARK) {
            theme.set(ThemeType.WHITE);
        } else {
            theme.set(ThemeType.DARK);
        }
    }

    return (
        <Button onClick={toggleTheme} active>
            <Theme css={cssContainer}>
                <Theme css={cssPoint}></Theme>
            </Theme>
        </Button>
    );
};

export default ToggleTheme;