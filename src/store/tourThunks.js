import {createAsyncThunk} from "@reduxjs/toolkit";
import {Tour} from "../service/Tour.js";

export const getToursByCategory =  createAsyncThunk(
    'tours/getToursByCategory',
    async (category, {rejectWithValue}) => {
        try {
            const response = await Tour.getToursByCategory(category);
            if (!response.ok){
                throw new Error('response error', response)
            }
            return {category, data: response.data}
        }catch (e) {
            return rejectWithValue(e.response);
        }
    }
)

export const getToursById = createAsyncThunk(
    'tours/getToursById',
    async (id,{rejectWithValue}) => {
        try {
            const response = await Tour.getToursById(id);
            if (!response.ok){
                throw new Error('response error', response);
            }
            return response.data
        }catch (e) {
            return rejectWithValue(e.response)
        }
    }
)
