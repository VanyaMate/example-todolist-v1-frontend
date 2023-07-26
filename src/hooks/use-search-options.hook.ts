import { ISearchOptions } from '../store/api.interface';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';


export const useSearchOptions = function <T> (): ISearchOptions<T> {
    const [ params ] = useSearchParams();
    return useMemo(() => {
        const offset: string | null            = params.get('offset');
        const limit: string | null             = params.get('limit');
        const order: string | null             = params.get('order');
        const searchOptions: ISearchOptions<T> = {
            limit : Number(limit ?? 10),
            offset: Number(offset ?? 0),
        };

        if (order) {
            searchOptions.order = order;
        }

        return searchOptions;
    }, [ params ]);
};