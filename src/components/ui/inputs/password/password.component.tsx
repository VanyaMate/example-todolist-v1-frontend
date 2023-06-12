import Input, {IInputProps} from "../input/input.component";
import React, {useState} from "react";
import Button from "../../buttons/button/button.component";
import css from './password.module.scss';
import Row from "../../containers/row/row.component";

enum InputType {
    PASS = 'password',
    TEXT = 'text'
}

const Password: React.FC<IInputProps> = (props) => {
    const [type, setType] = useState<string>(InputType.PASS);
    const toggleHandler = function () {
        setType(type === InputType.PASS ? InputType.TEXT : InputType.PASS );
    }

    return (
        <Row offset={5} className={css.container}>
            <Input {...props} type={type} className={css.input}/>
            <Button
                onClick={toggleHandler}
                className={css.toggle}
                active
            >{ type[0] }</Button>
        </Row>
    );
};

export default Password;