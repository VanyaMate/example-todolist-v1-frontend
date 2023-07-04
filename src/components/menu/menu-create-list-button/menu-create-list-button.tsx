import Button from "../../ui/buttons/button/button.component";
import {useActions} from "../../../hooks/redux/use-actions.hook";

const MenuCreateListButton = () => {
    const {redactor} = useActions();

    return (
        <Button active onClick={() => redactor.setList(null)}>Create list</Button>
    );
};

export default MenuCreateListButton;