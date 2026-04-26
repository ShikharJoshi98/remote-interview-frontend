import { post } from "../../../api/apiClient"

export const createInterview = (credentials) => {
    post('/interview/create', credentials);
}