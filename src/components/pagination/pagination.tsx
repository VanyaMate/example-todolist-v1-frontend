import React, {useEffect, useMemo, useState} from "react";
import Button from "../ui/buttons/button/button.component";
import Row from "../ui/containers/row/row.component";
import css from './pagination.module.scss';
import PaginationSeparator from "./pagination-separator";

export interface IPaginationProps extends React.HTMLAttributes<HTMLDivElement> {
    pages: number;                          //  Всего страниц
    page: number;                           //  Текущая страница
    onPageChange: (page: number) => void;   //  Callback при изменении страницы
}

const Pagination: React.FC<IPaginationProps> = (props) => {
    const items = useMemo(() => {
        const pages = props.pages;
        const listOfItems: number[] = new Array(pages);
        const currentPageIndex = props.page - 1;
        const lastPageIndex = pages - 1;

        listOfItems[0] = 1;
        listOfItems[currentPageIndex] = props.page;
        listOfItems[lastPageIndex] = pages;

        for (let i = 1, j = 0; j < 9 - (currentPageIndex === 0 ? 3 : 4); i++) {
            let changed = false;
            if (currentPageIndex + i < lastPageIndex) {
                listOfItems[currentPageIndex + i] = props.page + i;
                j++;
                changed = true;
            }

            if (currentPageIndex - i > 0) {
                listOfItems[currentPageIndex - i] = props.page - i;
                j++;
                changed = true;
            }

            if (!changed) {
                break;
            }
        }

        if (listOfItems[0] + 1 !== listOfItems[1]) {
            listOfItems[1] = 0;
        }
        if (listOfItems[lastPageIndex] - 1 !== listOfItems[lastPageIndex - 1]) {
            listOfItems[lastPageIndex - 1] = 0;
        }

        return listOfItems;
    }, [props]);
    const [currentPage, setCurrentPage] = useState<number>(props.page);

    useEffect(() => {
        setCurrentPage(props.page);
    }, [props.page, props.pages])

    return props.pages > 1 ?
        <Row offset={5} className={css.container}>
            {
                items.map((item, index) => {
                    if (item === 0) {
                        return <PaginationSeparator key={`${item}` + `${index}`}/>
                    }
                    return <Button
                        className={css.item}
                        active={item !== currentPage}
                        key={item}
                        onClick={() => props.onPageChange(item)}
                    >{item}</Button>;
                })
            }
        </Row>
        : <></>

};

export default Pagination;