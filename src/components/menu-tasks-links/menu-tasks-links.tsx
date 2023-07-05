import Vertical from "../ui/containers/vertical/vertical.component";
import LinkIcon from "../link-icon/link-icon";
import TitleSection from "../title-section/title-section";
import {URL_COMPLETED, URL_HOMEPAGE, URL_OVERDUE, URL_TODAY, URL_UPCOMING} from "../../constants/urls.constant";
import {PageType} from "../../hooks/use-page.hook";
import OpenCreateTaskRedactorButton from "../open-create-task-redactor-button/open-create-task-redactor-button";

const MenuTasksLinks = () => {
    return (
        <TitleSection title={'tasks'}>
            <Vertical offset={7}>
                <LinkIcon icon={'/icons/delete.png'} href={URL_HOMEPAGE} title={PageType.TODO_ALL}/>
                <LinkIcon icon={'/icons/delete.png'} href={URL_OVERDUE} title={PageType.TODO_OVERDUE}/>
                <LinkIcon icon={'/icons/delete.png'} href={URL_UPCOMING} title={PageType.TODO_UPCOMING}/>
                <LinkIcon icon={'/icons/delete.png'} href={URL_TODAY} title={PageType.TODO_TODAY}/>
                <LinkIcon icon={'/icons/delete.png'} href={URL_COMPLETED} title={PageType.TODO_COMPLETED}/>
                <OpenCreateTaskRedactorButton/>
            </Vertical>
        </TitleSection>
    );
};

export default MenuTasksLinks;