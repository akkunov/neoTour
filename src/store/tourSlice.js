import {createSlice} from "@reduxjs/toolkit";
import {data} from "../data.js";
import {getToursByCategory} from "./tourThunks.js";
import {ASIA, EUROPE, FEATURED, MOST_VISITED, POPULAR} from "../service/consts.js";


const initialState = {
    discover:{
        categories: [
            {data, category:POPULAR , name: "Popular", error : null, isLoading:false},
            {data, category:FEATURED , name:'Featured' , error : null, isLoading:false},
            {data, category: MOST_VISITED, name:'Most Visited'  , error : null, isLoading:false},
            {data, category: EUROPE, name:'Europe'  , error : null, isLoading:false},
            {data,  category: ASIA, name:'Asia'  , error : null, isLoading:false}
        ],
    },
    recommended: {
        data,
        error : null,
        isLoading:false
    },
    book:{
        isLoading:false,
        message: '',
        isModalOpen: false,
        modalMessage: '',
    }
}
const tourSlice  = createSlice({
    name: 'tours',
    initialState,
    reducers: {},
    extraReducers : builder => {
        builder
            .addCase(getToursByCategory.pending, (state, action) => {
                const category = state.discover.categories.find(cat => cat.name === action.meta.arg);
                if (category) {
                    category.isLoading = true;
                    category.error = null;
                }
            })
            .addCase(getToursByCategory.fulfilled, (state, action) => {
                const category = state.discover.categories.find(cat => cat.name === action.payload.category);
                if (category) {
                    category.isLoading = false;
                    category.data = action.payload.data;
                }
            })
            .addCase(getToursByCategory.rejected, (state, action) => {
                const category = state.discover.categories.find(cat => cat.name === action.payload.category);
                if (category) {
                    category.isLoading = false;
                    category.error = action.payload.error;
                }
            });
    }
})
export default tourSlice.reducer
