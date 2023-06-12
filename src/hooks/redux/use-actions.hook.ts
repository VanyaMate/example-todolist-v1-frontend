import {useDispatch} from "react-redux";
import {themeSlice} from "../../store/theme/theme.slice";
import {bindActionCreators} from "@reduxjs/toolkit";

export const useActions = function () {
    const dispatch = useDispatch();
    return {
        [themeSlice.name]: bindActionCreators(themeSlice.actions, dispatch),
    }
}