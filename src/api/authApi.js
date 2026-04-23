import { post } from "./apiClient";

export const loginUser = (credentials) =>
    post('/auth/login', credentials);

export const registerUser = (userData) =>
    post('/auth/register', userData);