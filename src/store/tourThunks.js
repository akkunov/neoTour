import {createAsyncThunk} from "@reduxjs/toolkit";
import {Tour} from "../service/Tour.js";

export const fetchAllTours  = createAsyncThunk(
    'tour/getAllTours',
    async (_, {rejectWithValue}) => {
        const response = await Tour.getAllTours();
        console.log(response)
        return response
    }
)
