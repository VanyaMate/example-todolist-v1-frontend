import css from './footer.module.scss';
import Theme from "../../ui/containers/theme/theme.component";
import Row from "../../ui/containers/row/row.component";
import StandardLink from "../../ui/links/link.component";

const Footer = () => {
    return (
        <Theme css={css}>
            <Row offset={25} content={css.centered}>
                <div>developer: <b><StandardLink href={'https://github.com/VanyaMate'} target={'_blank'} className={css.link}>VanyaMate</StandardLink></b></div>
                <div>frontend: <b><StandardLink href={'https://github.com/VanyaMate/example-todolist-v1-frontend'} target={'_blank'} className={css.link}>Git repository</StandardLink></b></div>
                <div>backend: <b><StandardLink href={'https://github.com/VanyaMate/example-todolist-v1-backend'} target={'_blank'} className={css.link}>Git repository</StandardLink></b></div>
            </Row>
        </Theme>
    );
};

export default Footer;