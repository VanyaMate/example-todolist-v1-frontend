import {useLocation} from "react-router-dom";

export const usePageTodoItem = function () {
    const {pathname, search} = useLocation();
    console.log(pathname, search);
    return pathname;
}