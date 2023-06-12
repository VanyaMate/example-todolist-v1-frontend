import css from './footer.module.scss';
import Theme from "../../ui/containers/theme/theme.component";
import Row from "../../ui/containers/row/row.component";
import Link from "../../ui/links/link.component";

const Footer = () => {
    return (
        <Theme css={css}>
            <Row offset={25} content={css.centered}>
                <div>developer: <b><Link href={'https://github.com/VanyaMate'} target={'_blank'} className={css.link}>VanyaMate</Link></b></div>
                <div>frontend: <b><Link href={'https://github.com/VanyaMate/example-todolist-v1-frontend'} target={'_blank'} className={css.link}>Git repository</Link></b></div>
                <div>backend: <b><Link href={'https://github.com/VanyaMate/example-todolist-v1-backend'} target={'_blank'} className={css.link}>Git repository</Link></b></div>
            </Row>
        </Theme>
    );
};

export default Footer;