import TitleSection from "../title-section/title-section";
import Vertical from "../ui/containers/vertical/vertical.component";
import ToggleTheme from "../theme-toggle/toggle-theme.component";
import LogoutButton from "../logout-button/logout-button";

const MenuSettings = () => {
    return (
        <div>
            <TitleSection title={'Settings'}>
                <Vertical offset={7}>
                    <ToggleTheme/>
                    <LogoutButton/>
                </Vertical>
            </TitleSection>
        </div>
    );
};

export default MenuSettings;