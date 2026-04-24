import { get, post } from "../../../api/apiClient";

export const loginUser = (credentials) =>
    post('/auth/login', credentials);

export const registerUser = (userData) =>
    post('/auth/register', userData);

export const getUser = () =>
    get('/auth/authenticate');

export const logoutUser = () =>
    post('/auth/logout');