import { createAsyncThunk } from "@reduxjs/toolkit";
import { createInterview } from "./interviewApi";

export const createInterviewThunk = createAsyncThunk(
    "createInterview",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await createInterview(credentials);
            return res;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)