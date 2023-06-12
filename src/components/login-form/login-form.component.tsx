import {useInput} from "../../hooks/use-input.hook";
import Input from "../ui/inputs/input/input.component";
import Button from "../ui/buttons/button/button.component";
import Vertical from "../ui/containers/vertical/vertical.component";
import {authApi} from "../../store/auth/auth.api";
import css from './login-form.module.scss';
import {loginValidator, passwordValidator} from "../../validators/form.validator";
import {useMemo} from "react";
import Box from "../ui/containers/box/box.component";

const LoginForm = () => {
    const login = useInput<string>('', loginValidator);
    const password = useInput<string>('', passwordValidator);
    const [dispatchLogin, { isFetching }] = authApi.useLazyLoginQuery();
    const valid = useMemo<boolean>(() => {
        return login.valid && password.valid && !isFetching;
    }, [login.valid, password.valid, isFetching])

    const loginHandler = function () {
        dispatchLogin({
            login: login.value,
            password: password.value,
        }).then(({ isError, data }) => {
            if (!isError) {
                console.log(data);
            }
        })
    }

    return (
        <Box css={css}>
            <Vertical offset={5}>
                <Input hook={login} placeholder={'Логин'}/>
                <Input hook={password} placeholder={'Пароль'}/>
                <Button onClick={loginHandler} active={valid}>Войти</Button>
            </Vertical>
        </Box>
    );
};

export default LoginForm;