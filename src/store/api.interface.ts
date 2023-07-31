export type Order<T> = [ keyof T, 'asc' | 'desc' ];

export interface ISearchOptions<T> {
    limit: number;
    offset: number;
    order?: Order<T>[] | string;
}

export interface IMultiplyResponse<T> {
    list: T[],
    options: ISearchOptions<T>,
    count: number,
}

export interface IError<T> {
    status: number;
    data: T;
}

export interface IValidationErrorItem {
    field: string;
    messages: string[];
    value: string;
}

export interface IValidationError {
    errors: IValidationErrorItem[];
}