import {configureStore} from "@reduxjs/toolkit";

import tourReducer from './tourSlice.js';
export const store = configureStore({
    reducer: {
        tours: tourReducer
    }
})