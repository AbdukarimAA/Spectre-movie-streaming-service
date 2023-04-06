import axios from "axios";
import {BASE_URL} from "../consts/reqUrls";

export const axiosRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});