import { createSlice } from "@reduxjs/toolkit";
import { checkAuthThunk, loginThunk, logoutThunk, registerThunk } from "./authThunk";

const initialState = {
    user: null,
    loading: false,
    authCheckLoading: true,
    error: null,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
  
    extraReducers: (builder) => {
        builder
            //register
            .addCase(registerThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerThunk.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(registerThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //login
            .addCase(loginThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //check-auth
            .addCase(checkAuthThunk.pending, (state) => {
                state.authCheckLoading = true;
            })
            .addCase(checkAuthThunk.fulfilled, (state, action) => {
                state.authCheckLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(checkAuthThunk.rejected, (state) => {
                state.authCheckLoading = false;
                state.isAuthenticated = false
            })

            //logout
            .addCase(logoutThunk.fulfilled, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
            })
    }
});

export default authSlice.reducer;
