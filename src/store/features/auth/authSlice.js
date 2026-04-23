import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auth",
    
    initialState,

    reducers: {
        setRegisterCredentials: (state, action) => {
            state.user = action.payload.user;
        },
        setLoginCredentials: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        }
    }
});

export const {
    setRegisterCredentials,
    setLoginCredentials,
    logout
} = authSlice.actions;

export default authSlice.reducer;
