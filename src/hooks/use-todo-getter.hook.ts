import { PageType } from './use-page.hook';
import { ISearchOptions } from '../store/api.interface';
import { ITodoItem } from '../store/todoitem/todoitem.interface';
import { ITodoGetQueries, SimpleTodoQuery, useTodoGetQueries } from './use-todo-get-queries.hook';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from './redux/use-actions.hook';


interface IUseTodoGetterProps {
    page: PageType;
    searchOptions: ISearchOptions<ITodoItem>;
}

export const useTodoGetter = function (props: IUseTodoGetterProps) {
    const params                   = useParams<{ id: string }>();
    const queries: ITodoGetQueries = useTodoGetQueries();
    const { todoitem }             = useActions();

    useEffect(() => {
        todoitem.setFetching(true);
        todoitem.setError(false);

        let query: ITodoGetQueries[keyof ITodoGetQueries] | null = null;

        switch (props.page) {
            case PageType.TODO_ALL: query = queries.all; break;
            case PageType.TODO_UPCOMING: query = queries.upcoming; break;
            case PageType.TODO_OVERDUE: query = queries.overdue; break;
            case PageType.TODO_TODAY: query = queries.today; break;
            case PageType.TODO_LIST: query = queries.list; break;
            case PageType.TODO_COMPLETED: query = queries.completed; break;
            default: break;
        }

        if (query) {
            (
                query === queries.list
                    ? query({ params: props.searchOptions, id: Number(params.id) })
                    : (query as SimpleTodoQuery)(props.searchOptions)
            )
                .then((response) => {
                    todoitem.set(response.data!.list);
                    todoitem.setCount(response.data!.count);
                })
                .catch(() => todoitem.setError(true))
                .finally(() => todoitem.setFetching(false));
        }
    }, [ props.page, props.searchOptions, params.id ])
}