import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localstorage.helper";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://auth.corecraft.ru',
    headers: {
        Authorization: 'Bearer ' + getTokenFromLocalStorage() || '',
    },
});