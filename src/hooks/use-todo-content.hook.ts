import { PageType, usePage } from './use-page.hook';
import { ISearchOptions } from '../store/api.interface';
import { ITodoItem } from '../store/todoitem/todoitem.interface';
import { useSearchOptions } from './use-search-options.hook';
import { useTodoGetter } from './use-todo-getter.hook';
import { useListSearch, UseListSearch } from './use-list-search.hook';
import { useParams } from 'react-router-dom';
import { ITodoList } from '../store/todolist/todolist.interface';
import { useMemo } from 'react';
import { useSlice } from './redux/use-store.hook';
import { ITodoItemSlice } from '../store/todoitem/todoitem.slice';
import { ISearchSlice } from '../store/search/search.slice';


export interface IUseTodoContent {
    page: PageType;
    getter: ITodoItemSlice;
    options: ISearchOptions<ITodoItem>;
    title: string;
}

export const useTodoContent = function (): IUseTodoContent {
    const page: PageType                              = usePage();
    const urlSearchOptions: ISearchOptions<ITodoItem> = useSearchOptions<ITodoItem>();
    const search: ISearchSlice                        = useSlice((state) => state.search);
    const searchOptions: ISearchOptions<ITodoItem>    = useMemo(
        () => ({ ...search.currentSearchOptions, ...urlSearchOptions }),
        [ urlSearchOptions, search.currentSearchOptions ],
    );

    useTodoGetter({ page, searchOptions });

    const listSearch: UseListSearch       = useListSearch();
    const params: { id?: string }         = useParams<{ id?: string }>();
    const todolist: ITodoList | undefined = useMemo(() => params.id ? listSearch(Number(params.id))
                                                                    : undefined, [ params ]);
    const title: string                   = useMemo(() => page === PageType.TODO_LIST
                                                          ? (todolist?.title ?? '')
                                                          : page, [ page, todolist ]);
    const todoitemSlice: ITodoItemSlice   = useSlice((state) => state.todoitem);

    return {
        getter : todoitemSlice,
        page,
        options: searchOptions,
        title,
    };
};