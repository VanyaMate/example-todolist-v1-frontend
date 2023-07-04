import Button from "../../ui/buttons/button/button.component";
import {useActions} from "../../../hooks/redux/use-actions.hook";

const MenuCreateItemButton = () => {
    const {redactor} = useActions();

    return (
        <Button active onClick={() => redactor.setItem(null)}>Create task</Button>
    );
};

export default MenuCreateItemButton;