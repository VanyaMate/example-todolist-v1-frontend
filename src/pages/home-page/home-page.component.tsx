import {Link} from "react-router-dom";
import {useStore} from "../../hooks/redux/use-store.hook";

const HomePage = () => {
    const todoListStore = useStore((state) => state.todolist);
    const todoItemStore = useStore((state) => state.todoitem);
    return (
        <div>
            HomePage
            <Link to={'/login'}>Login</Link>

            {
                todoListStore.lists.map((list) => {
                    return <div key={list.id}>
                        <h2>{list.title}</h2>
                        <p>{list.description}</p>
                        <div>
                            {
                                /**
                                 * Выглядит фигово то что нужно искать по всему массиву каждый раз
                                 */
                                list.todo_items.map((id) => {
                                    const item = todoItemStore.items.filter((item) => item.id === id)[0];
                                    return <div key={item.id}>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <p>Status: [ {item.status ? '+' : '-'} ]</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default HomePage;