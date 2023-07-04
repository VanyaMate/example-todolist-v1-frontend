import css from './menu-fixed.module.scss';
import Box from "../ui/containers/box/box.component";
import ContentHeight from "../content-height/content-height";
import TitleBox from "../title-box/title-box";
import Vertical from "../ui/containers/vertical/vertical.component";
import MenuTasksLinks from "../menu-tasks-links/menu-tasks-links";
import MenuLists from "../menu-lists/menu-lists";

const MenuFixed = () => {
    return (
        <ContentHeight>
            <Box className={css.container}>
                <Vertical offset={15}>
                    <TitleBox title={'Menu'}/>
                    <MenuTasksLinks/>
                    <MenuLists/>
                </Vertical>
            </Box>
        </ContentHeight>
    );
};

export default MenuFixed;