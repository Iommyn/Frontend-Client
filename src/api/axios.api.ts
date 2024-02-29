import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localstorage";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://auth.corecraft.ru',
    headers: {
        Authorization: 'Bearer ' + getTokenFromLocalStorage() || '',
    },
});