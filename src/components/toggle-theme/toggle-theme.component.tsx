import {useStore} from "../../hooks/redux/use-store.hook";
import {useActions} from "../../hooks/redux/use-actions.hook";
import Button from "../ui/buttons/button/button.component";
import {ThemeType} from "../../store/theme/theme.slice";

const ToggleTheme = () => {
    const themeStore = useStore((state) => state.theme);
    const { theme } = useActions();

    const toggleTheme = function () {
        if (themeStore.theme === ThemeType.DARK) {
            theme.set(ThemeType.WHITE);
        } else {
            theme.set(ThemeType.DARK);
        }
    }

    return (
        <Button onClick={toggleTheme}>
            { themeStore.theme }
        </Button>
    );
};

export default ToggleTheme;