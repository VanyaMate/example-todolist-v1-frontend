import css from './loader.module.scss';
import Theme from "../ui/containers/theme/theme.component";

const Loader = () => {
    return (
        <Theme css={css}>
            <div className={css.loader}/>
        </Theme>
    );
};

export default Loader;