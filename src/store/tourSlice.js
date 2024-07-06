import {createSlice} from "@reduxjs/toolkit";
import {getRecommendedTours, getToursByCategory} from "./tourThunks.js";
import {ASIA, EUROPE, FEATURED, MOST_VISITED, POPULAR} from "../service/consts.js";


const initialState = {
    discover: {
        categories: [
            {data: [], category: POPULAR, name: "Popular", error: null, isLoading: false},
            {data: [], category: FEATURED, name: 'Featured', error: null, isLoading: false},
            {data: [], category: MOST_VISITED, name: 'Most Visited', error: null, isLoading: false},
            {data: [], category: EUROPE, name: 'Europe', error: null, isLoading: false},
            {data: [], category: ASIA, name: 'Asia', error: null, isLoading: false}
        ],
    },
    recommended: {
        data: [],
        error: null,
        isLoading: false
    },
}
const tourSlice = createSlice({
    name: 'tours',
    initialState,
    reducers: {},
    extraReducers: builder => {
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
            })
            .addCase(getRecommendedTours.pending, (state, action) => {
                    state.recommended.isLoading = true;
                    state.recommended.error = null;

            })
            .addCase(getRecommendedTours.fulfilled, (state, action) => {
                state.recommended.data = action.payload
                state.recommended.isLoading = false;
                state.recommended.data = action.payload.data;

            })
            .addCase(getRecommendedTours.rejected, (state, action) => {
                state.recommended.isLoading = false;
                state.recommended.error = action.payload.error;
            });

    }
})
export default tourSlice.reducer
