import {useInput} from "../../hooks/use-input.hook";
import Input from "../ui/inputs/input/input.component";
import Button from "../ui/buttons/button/button.component";
import Vertical from "../ui/containers/vertical/vertical.component";
import Box from "../ui/containers/box/box.component";
import Password from "../ui/inputs/password/password.component";
import {loginValidator, passwordValidator} from "../../validators/form.validator";
import {useMemo} from "react";
import TitleSection from "../title-section/title-section";
import {useAuth} from "../../hooks/use-auth.hook";

const RegistrationForm = () => {
    const login =                   useInput<string>('', loginValidator);
    const password =                useInput<string>('', passwordValidator);
    const auth =                    useAuth();

    const valid =                   useMemo<boolean>(() => {
                                        return login.valid && password.valid && !auth.isFetching;
                                    }, [login.valid, password.valid, auth.isFetching])

    const registrationHandler =     function () {
                                        auth.registration(login.value, password.value);
                                    }

    return (
        <Box>
            <TitleSection title={'Registration'}>
                <Vertical offset={5}>
                    <Input hook={login} placeholder={'Login'}/>
                    <Password hook={password} placeholder={'Password'}/>
                    <Button onClick={registrationHandler} active={valid}>Registration</Button>
                </Vertical>
            </TitleSection>
        </Box>
    );
};

export default RegistrationForm;