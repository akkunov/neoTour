import {createAsyncThunk} from "@reduxjs/toolkit";
import {Tour} from "../service/Tour.js";
import {RECOMMENDED} from "../service/consts.js";

export const getToursByCategory =  createAsyncThunk(
    'tours/getToursByCategory',
    async (category, {rejectWithValue}) => {
        try {
            const response = await Tour.getToursByCategory(category);
            console.log(response)
            if (response.status !== 200){
                throw new Error('response error', response)
            }
            return {category, data: response.data}
        }catch (e) {
            return rejectWithValue({category, data:e.response});
        }
    }
)
export const getRecommendedTours =  createAsyncThunk(
    'tours/getRecommendedTours',
    async (category, {rejectWithValue}) => {
        try {
            const response = await Tour.getToursByCategory(RECOMMENDED);
            if (response.status !== 200){
                throw new Error('response error', response)
            }
            return response.data
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
            if (response.status !== 200){
                throw new Error('response error', response);
            }
            return response.data
        }catch (e) {
            return rejectWithValue(e.response)
        }
    }
)
