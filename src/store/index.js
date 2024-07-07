import {configureStore} from "@reduxjs/toolkit";

import tourReducer from './tourSlice.js';
import bookReducer from "./bookSlice.js";


export const store = configureStore({
    reducer: {
        tours: tourReducer,
        book: bookReducer
    }
})