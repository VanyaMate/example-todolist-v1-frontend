import {useSlice} from "../../hooks/redux/use-store.hook";
import Theme from "../ui/containers/theme/theme.component";
import css from './redactor.module.scss';
import {cn} from "../../helpers/react.helper";
import Button from "../ui/buttons/button/button.component";
import {useActions} from "../../hooks/redux/use-actions.hook";
import Row from "../ui/containers/row/row.component";
import Vertical from "../ui/containers/vertical/vertical.component";
import {RedactorType} from "../../store/redactor/redactor.slice";
import ItemRedactor from "./item-redactor/item-redactor";

const Redactor = () => {
    const redactorSlice = useSlice((state) => state.redactor);
    const {redactor} = useActions();

    return (
        <Theme css={css} className={cn(redactorSlice.opened ? '' : css.hidden)}>
            <Vertical offset={5} className={css.content}>
                <Row offset={5} className={css.titleRow}>
                    <h1 className={css.title}>{ redactorSlice.redactorType }:</h1>
                    <Button active onClick={() => redactor.setOpen(false)}>Close</Button>
                </Row>
                {
                    redactorSlice.redactorType === RedactorType.LIST ?
                        <ItemRedactor/> :
                        <ItemRedactor/>
                }
            </Vertical>
        </Theme>
    );
};

export default Redactor;