import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const bookFormSlice = createSlice({
    name: 'bookForm',
    initialState: {

        status: 'idle', // idle | loading | succeeded | failed
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

export const { setNumber, setMessage, incrementCount, decrementCount, closeModal } = bookFormSlice.actions;

export default bookFormSlice.reducer;
