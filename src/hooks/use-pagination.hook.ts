import {useMemo} from "react";

export interface IUsePaginationProps {
    itemsAmount:    number;
    offset:         number;
    limitOnPage:    number;
}

export interface IUsePagination {
    currentPage:    number;
    pagesAmount:    number;
}

export const usePagination = function (props: IUsePaginationProps): IUsePagination {
    const currentPage: number =     useMemo<number>(
                                        () => Math.floor((props.offset) / props.limitOnPage) + 1,
                                        [props.offset, props.limitOnPage]
                                    );
    const pagesAmount: number =     useMemo<number>(
                                        () => Math.ceil(props.itemsAmount / props.limitOnPage),
                                        [props.itemsAmount, props.limitOnPage]
                                    );

    return {
        currentPage,
        pagesAmount,
    }
}