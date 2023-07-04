import Vertical from "../ui/containers/vertical/vertical.component";
import HoverBox from "../ui/containers/hover-box/hover-box";
import LinkIcon from "../link-icon/link-icon";
import TitleSection from "../title-section/title-section";

const MenuTasksLinks = () => {
    return (
        <TitleSection title={'tasks'}>
            <Vertical offset={7}>
                <HoverBox>
                    <LinkIcon icon={'/icons/delete.png'} href={'/'} title={'All'}/>
                </HoverBox>
                <HoverBox>
                    <LinkIcon icon={'/icons/delete.png'} href={'/overdue'} title={'Overdue'}/>
                </HoverBox>
                <HoverBox>
                    <LinkIcon icon={'/icons/delete.png'} href={'/today'} title={'Today'}/>
                </HoverBox>
                <HoverBox>
                    <LinkIcon icon={'/icons/delete.png'} href={'/completed'} title={'Completed'}/>
                </HoverBox>
            </Vertical>
        </TitleSection>
    );
};

export default MenuTasksLinks;