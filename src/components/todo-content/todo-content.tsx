import ContentHeight from '../content-height/content-height';
import css from './todo-content.module.scss';
import TitleWithCounter from '../title-with-counter/title-with-counter';
import TodoTasks from '../todo-tasks/todo-tasks';
import {
    IUseTodoContent,
    useTodoContent,
} from '../../hooks/use-todo-content.hook';
import { cn } from '../../helpers/react.helper';
import Vertical from '../ui/containers/vertical/vertical.component';
import Pagination from '../pagination/pagination';
import { IUsePagination, usePagination } from '../../hooks/use-pagination.hook';
import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';


const TodoContent = () => {
    const { getter, title, options }: IUseTodoContent  = useTodoContent();
    const { currentPage, pagesAmount }: IUsePagination = usePagination({
        limitOnPage: options.limit,
        offset     : options.offset,
        itemsAmount: getter.count ?? 0,
    });
    const [ _, setSearchParams ]                       = useSearchParams();
    const setPage                                      = useCallback((page: number) => {
        setSearchParams({ offset: `${ options.limit * (page - 1) }` });
    }, [ options.limit, setSearchParams ]);

    return (
        <ContentHeight
            className={ cn(css.container, getter.fetching ? css.loading
                                                          : undefined) }>
            <Vertical offset={ 10 }
                      className={ css.separator }
            >
                <Vertical offset={ 20 }>
                    <TitleWithCounter title={ title }
                                      counter={ getter.count }
                    />
                    <TodoTasks list={ getter.list.slice(0, 10) }/>
                </Vertical>
                <Pagination
                    pages={ pagesAmount }
                    page={ currentPage }
                    onPageChange={ setPage }
                />
            </Vertical>
        </ContentHeight>
    );
};

export default TodoContent;