import React from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import * as actions from "../store/tourThunks.js";
import * as bookActions from "../store/bookSlice.js";

const actionsAll = {...actions, ...bookActions}
export const useActions = () => {
    const dispatch = useDispatch();
    return React.useMemo(() => bindActionCreators(actionsAll, dispatch), [dispatch]);
};
