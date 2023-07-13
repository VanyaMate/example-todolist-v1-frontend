import LoginForm from "../../components/login-form/login-form.component";
import RegistrationForm from "../../components/registration-form/registration-form.component";
import Row from "../../components/ui/containers/row/row.component";
import css from './login-page.module.scss';

const LoginPage = () => {
    return (
        <Row offset={20} className={css.container}>
            <LoginForm/>
            <RegistrationForm/>
        </Row>
    );
};

export default LoginPage;