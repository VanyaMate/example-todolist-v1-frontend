import {Link} from "react-router-dom";
import {useStore} from "../../hooks/redux/use-store.hook";

const HomePage = () => {
    const todoListStore = useStore((state) => state.todolist);
    return (
        <div>
            HomePage
            <Link to={'/login'}>Login</Link>

            {
                todoListStore.lists.map((list) => {
                    return <div key={list.id}>{list.title}</div>
                })
            }
        </div>
    );
};

export default HomePage;