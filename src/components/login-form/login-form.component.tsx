import {useInput} from "../../hooks/use-input.hook";
import Input from "../ui/inputs/input/input.component";
import Button from "../ui/buttons/button/button.component";
import Vertical from "../ui/containers/vertical/vertical.component";
import {loginValidator, passwordValidator} from "../../validators/form.validator";
import {useMemo} from "react";
import Box from "../ui/containers/box/box.component";
import {useAuth} from "../../hooks/use-auth.hook";
import Password from "../ui/inputs/password/password.component";
import TitleSection from "../title-section/title-section";

const LoginForm = () => {
    const login =       useInput<string>('', loginValidator);
    const password =    useInput<string>('', passwordValidator);
    const auth =        useAuth();
    const valid =       useMemo<boolean>(() => {
                            return login.valid && password.valid && !auth.isFetching;
                        }, [login.valid, password.valid, auth.isFetching])

    const loginHandler = function () {
        auth.login(login.value, password.value);
    }

    return (
        <Box>
            <TitleSection title={'Login'}>
                <Vertical offset={5}>
                    <Input hook={login} placeholder={'Логин'} autoComplete={'off'}/>
                    <Password hook={password} placeholder={'Пароль'} autoComplete={'off'}/>
                    <Button onClick={loginHandler} active={valid}>Войти</Button>
                </Vertical>
            </TitleSection>
        </Box>
    );
};

export default LoginForm;