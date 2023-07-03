export type Order<T> = [keyof T, 'asc' | 'desc'];

export interface ISearchOptions<T> {
    limit?: number;
    offset?: number;
    order?: Order<T>[] | string
}

export interface IMultiplyResponse<T> {
    list: T[],
    options: ISearchOptions<T>,
    count: number,
}