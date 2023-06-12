import HeaderLogo from "../../logo-header/header-logo.component";
import Theme from "../../ui/containers/theme/theme.component";
import css from './header.module.scss';
import Row from "../../ui/containers/row/row.component";
import ToggleTheme from "../../theme-toggle/toggle-theme.component";

const Header = () => {
    return (
        <Theme css={css}>
            <HeaderLogo/>
            <Row offset={10}>
                <ToggleTheme/>
            </Row>
        </Theme>
    );
};

export default Header;