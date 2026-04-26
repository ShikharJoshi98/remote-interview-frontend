import { createSlice } from "@reduxjs/toolkit";
import { createInterviewThunk } from "./interviewThunk";

const initialState = {
    loading: false,
    error: null,
    user: null,
};

const interviewSlice = createSlice({
    name: "interview",
    initialState,
    
    extraReducers: (builder) => {
        builder
            //create interview
            .addCase(createInterviewThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(createInterviewThunk.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(createInterviewThunk.rejected, (state, action) => {
                state.loading = false,
                state.error = action.payload
            })
    }
})