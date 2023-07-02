import Vertical from "../ui/containers/vertical/vertical.component";
import Input from "../ui/inputs/input/input.component";
import {useInput} from "../../hooks/use-input.hook";
import TitledList from "../titled-list/titled-list.component";
import {useLocation} from "react-router-dom";
import css from './menu.module.scss';
import Theme from "../ui/containers/theme/theme.component";
import {
    URL_CALENDAR, URL_COMPLETED,
    URL_HOMEPAGE,
    URL_LIST,
    URL_OVERDUE,
    URL_TODAY,
    URL_UPCOMING
} from "../../constants/urls.constant";
import LinkListItem from "../link-list-item/link-list-item.component";
import {useStore} from "../../hooks/redux/use-store.hook";

const Menu = () => {
    const search = useInput('');
    const location = useLocation();
    const todoListSlice = useStore((state) => state.todolist);

    return (
        <Theme css={css}>
            <Vertical offset={20}>
                <h2>Menu</h2>
                <Input hook={search} placeholder={'Search'}/>
                <TitledList title={'Tasks'}>
                    <LinkListItem
                        to={URL_HOMEPAGE}
                        active={location.pathname === URL_HOMEPAGE}
                        text={'All'}
                        icon={'/icons/delete.png'}
                        count={0}
                    />
                    <LinkListItem
                        to={URL_COMPLETED}
                        active={location.pathname === URL_COMPLETED}
                        text={'Completed'}
                        icon={'/icons/delete.png'}
                        count={0}
                    />
                    <LinkListItem
                        to={URL_UPCOMING}
                        active={location.pathname === URL_UPCOMING}
                        text={'Upcoming'}
                        icon={'/icons/delete.png'}
                        count={0}
                    />
                    <LinkListItem
                        to={URL_TODAY}
                        active={location.pathname === URL_TODAY}
                        text={'Today'}
                        icon={'/icons/diskette.png'}
                        count={0}
                    />
                    <LinkListItem
                        to={URL_CALENDAR}
                        active={location.pathname === URL_CALENDAR}
                        text={'Calendar'}
                        icon={'/icons/diskette.png'}
                        count={0}
                    />
                    <LinkListItem
                        to={URL_OVERDUE}
                        active={location.pathname === URL_OVERDUE}
                        text={'Overdue'}
                        icon={'/icons/diskette.png'}
                        count={0}
                    />
                </TitledList>
                <TitledList title={'Lists'}>
                    {
                        todoListSlice.lists.map((list) => {
                            const listUrl = URL_LIST + `/${ list.id }`;
                            return (
                                <LinkListItem
                                    key={list.id}
                                    to={listUrl}
                                    active={location.pathname === listUrl}
                                    text={list.title}
                                    color={'red'}
                                    count={0}
                                />
                            )
                        })
                    }
                </TitledList>
            </Vertical>
        </Theme>
    );
};

export default Menu;