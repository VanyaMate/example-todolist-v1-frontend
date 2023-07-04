import {ISearchOptions} from "../store/api.interface";

export const getQuerySearchOptions = function<T> (searchOptions: ISearchOptions<T>) {
    return {
        offset: searchOptions?.offset ?? 0,
        limit: searchOptions?.limit ?? 10,
        order: searchOptions?.order
            ? typeof searchOptions.order === 'string'
                ? searchOptions.order
                : searchOptions.order.map(([key, value]) => `${key as string}:${value}`).join(',')
            : ''
    }
}