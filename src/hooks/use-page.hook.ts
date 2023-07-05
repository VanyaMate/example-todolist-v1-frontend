import {useLocation} from "react-router-dom";
import {URL_COMPLETED, URL_HOMEPAGE, URL_OVERDUE, URL_TODAY, URL_UPCOMING} from "../constants/urls.constant";
import {useMemo} from "react";

// Типы страниц
export enum PageType {
    TODO_ALL = 'all',
    TODO_UPCOMING = 'upcoming',
    TODO_OVERDUE = 'overdue',
    TODO_TODAY = 'today',
    TODO_COMPLETED = 'completed',
    TODO_LIST = 'list',
    NOT_TODO = '',
}

export const usePage = function (): PageType {
    const { pathname } = useLocation();

    return useMemo(() => {
        switch (pathname) {
            case URL_HOMEPAGE:
                return PageType.TODO_ALL;

            case URL_UPCOMING:
                return PageType.TODO_UPCOMING;

            case URL_OVERDUE:
                return PageType.TODO_OVERDUE;

            case URL_TODAY:
                return PageType.TODO_TODAY;

            case URL_COMPLETED:
                return PageType.TODO_COMPLETED;

            default:
                if (pathname.match(/^\/list\/\d+$/)) {
                    return PageType.TODO_LIST;
                }
                return PageType.NOT_TODO;
        }
    }, [pathname])
}