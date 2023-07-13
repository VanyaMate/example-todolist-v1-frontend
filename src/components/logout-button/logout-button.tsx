import Button from "../ui/buttons/button/button.component";
import {useAuth} from "../../hooks/use-auth.hook";

const LogoutButton = () => {
    const auth = useAuth();

    return (
        <Button active loading={auth.isFetching} onClick={auth.logout}>
            Logout
        </Button>
    );
};

export default LogoutButton;