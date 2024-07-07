import { createSlice } from '@reduxjs/toolkit';
import {bookTrip} from "./tourThunks.js";



const bookFormSlice = createSlice({
    name: 'book',
    initialState: {
        status: 'idle',
        isModalOpen: false,
        modalMessage: null,
    },
    reducers: {
        closeModal: (state) => {
            state.isModalOpen = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(bookTrip.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(bookTrip.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.isModalOpen = true;
                state.modalMessage = 'Your trip has been booked!';
            })
            .addCase(bookTrip.rejected, (state, action) => {
                state.status = 'failed';
                state.isModalOpen = true;
                state.modalMessage = 'The tour can’t be booked';
            });
    },
});

export const {closeModal}  = bookFormSlice.actions
export default bookFormSlice.reducer;
