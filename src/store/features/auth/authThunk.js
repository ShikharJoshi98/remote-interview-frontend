import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authAPI";

export const registerThunk = createAsyncThunk(
    "authRegister",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await registerUser(credentials);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const loginThunk = createAsyncThunk(
    "authLogin",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await loginUser(credentials);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)