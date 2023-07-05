import TitleSection from "../title-section/title-section";
import Vertical from "../ui/containers/vertical/vertical.component";
import ToggleTheme from "../theme-toggle/toggle-theme.component";

const MenuSettings = () => {
    return (
        <div>
            <TitleSection title={'Settings'}>
                <Vertical offset={7}>
                    <ToggleTheme/>
                </Vertical>
            </TitleSection>
        </div>
    );
};

export default MenuSettings;