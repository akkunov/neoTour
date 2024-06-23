import {createSlice} from "@reduxjs/toolkit";
import {data} from "../data.js";


const initialState = {
    discover:{
        name:'Discover',
        category: [
            {data, name: "Popular", error : null, isLoading:false},
            {data, name:'Featured' , error : null, isLoading:false},
            {data, name:'Most Visited'  , error : null, isLoading:false},
            {data, name:'Europe'  , error : null, isLoading:false},
            {data,  name:'Asia'  , error : null, isLoading:false}
        ],
    },
    recommended: {
        data,
        name: "Recommended",
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
    name: 'tour',
    initialState,
    reducers: {},
    extraReducers : builder => {
        
    }
})
export default tourSlice.reducer
