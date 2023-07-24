import TitleSection from '../title-section/title-section';
import Vertical from '../ui/containers/vertical/vertical.component';
import { useSlice } from '../../hooks/redux/use-store.hook';
import OpenCreateListRedactorButton
    from '../open-create-list-redactor-button/open-create-list-redactor-button';
import TodoListMenuItem from '../todo/todo-list-menu-item/todo-list-menu-item';


const MenuLists = () => {
    const todolists = useSlice((state) => state.todolist);

    return (
        <TitleSection title={ 'lists' }>
            <Vertical offset={ 7 }>
                {
                    todolists.lists.map((list) =>
                        <TodoListMenuItem key={list.id} list={list}/>
                    )
                }
                <OpenCreateListRedactorButton/>
            </Vertical>
        </TitleSection>
    );
};

export default MenuLists;