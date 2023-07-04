import TitleSection from "../title-section/title-section";
import Vertical from "../ui/containers/vertical/vertical.component";
import HoverBox from "../ui/containers/hover-box/hover-box";
import LinkIcon from "../link-icon/link-icon";

const MenuLists = () => {
    return (
        <TitleSection title={'lists'}>
            <Vertical offset={7}>
                <HoverBox>
                    <LinkIcon icon={'/icons/delete.png'} href={'/'} title={'First link'}/>
                </HoverBox>
                <HoverBox>
                    <LinkIcon icon={'/icons/delete.png'} href={'/'} title={'Second link'}/>
                </HoverBox>
                <HoverBox>
                    <LinkIcon icon={'/icons/delete.png'} href={'/'} title={'Third link'}/>
                </HoverBox>
            </Vertical>
        </TitleSection>
    );
};

export default MenuLists;