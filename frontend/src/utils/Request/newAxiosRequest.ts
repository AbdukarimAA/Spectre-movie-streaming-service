import axios from "axios";

export const axiosRequest = axios.create({
    baseURL: 'http://localhost:8400/api/',
    withCredentials: true,
});