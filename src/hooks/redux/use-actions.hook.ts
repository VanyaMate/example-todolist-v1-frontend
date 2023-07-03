import {useDispatch} from "react-redux";
import {themeSlice} from "../../store/theme/theme.slice";
import {bindActionCreators} from "@reduxjs/toolkit";
import {authSlice} from "../../store/auth/auth.slice";
import {todolistSlice} from "../../store/todolist/todolist.slice";
import {todoitemSlice} from "../../store/todoitem/todoitem.slice";
import {searchSlice} from "../../store/search/search.slice";

export const useActions = function () {
    const dispatch = useDispatch();
    return {
        [themeSlice.name]: bindActionCreators(themeSlice.actions, dispatch),
        [authSlice.name]: bindActionCreators(authSlice.actions, dispatch),
        [todolistSlice.name]: bindActionCreators(todolistSlice.actions, dispatch),
        [todoitemSlice.name]: bindActionCreators(todoitemSlice.actions, dispatch),
        [searchSlice.name]: bindActionCreators(searchSlice.actions, dispatch),
    }
}