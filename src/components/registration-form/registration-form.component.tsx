import {useInput} from "../../hooks/use-input.hook";
import Input from "../ui/inputs/input/input.component";
import Button from "../ui/buttons/button/button.component";
import Vertical from "../ui/containers/vertical/vertical.component";

const RegistrationForm = () => {
    const login = useInput<string>('');
    const password = useInput<string>('');

    return (
        <Vertical offset={5}>
            <Input hook={login} placeholder={'Логин'}/>
            <Input hook={password} placeholder={'Пароль'}/>
            <Button>Регистрация</Button>
        </Vertical>
    );
};

export default RegistrationForm;