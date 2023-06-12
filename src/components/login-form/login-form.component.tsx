import {useInput} from "../../hooks/use-input.hook";
import Input from "../ui/inputs/input/input.component";
import Button from "../ui/buttons/button/button.component";
import Vertical from "../ui/containers/vertical/vertical.component";
import {authApi} from "../../store/auth/auth.api";

const LoginForm = () => {
    const login = useInput<string>('');
    const password = useInput<string>('');
    const [dispatchLogin, {  }] = authApi.useLazyLoginQuery();

    const loginHandler = function () {
        dispatchLogin({
            login: login.value,
            password: password.value,
        })
    }

    return (
        <Vertical offset={5}>
            <Input hook={login} placeholder={'Логин'}/>
            <Input hook={password} placeholder={'Пароль'}/>
            <Button onClick={loginHandler}>Войти</Button>
        </Vertical>
    );
};

export default LoginForm;