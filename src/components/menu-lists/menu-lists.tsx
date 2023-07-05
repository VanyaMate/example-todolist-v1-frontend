import TitleSection from "../title-section/title-section";
import Vertical from "../ui/containers/vertical/vertical.component";
import LinkIcon from "../link-icon/link-icon";
import {useSlice} from "../../hooks/redux/use-store.hook";
import {URL_LIST} from "../../constants/urls.constant";

const MenuLists = () => {
    const todolists = useSlice((state) => state.todolist);

    return (
        <TitleSection title={'lists'}>
            <Vertical offset={7}>
                {
                    todolists.lists.map((list) =>
                        <LinkIcon key={list.id} icon={'/icons/delete.png'} href={URL_LIST + '/' + list.id} title={list.title}/>
                    )
                }
            </Vertical>
        </TitleSection>
    );
};

export default MenuLists;