import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localstorage";


const token = getTokenFromLocalStorage();


const headers = token ? { Authorization: 'Bearer ' + token } : {};


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://auth.corecraft.ru',
    headers: headers,
});