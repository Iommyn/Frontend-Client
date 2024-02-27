import {IResponseUserData, IUserData} from "../types/types";
import {instance} from "../api/axios.api";

export const AuthService = {


    async login(userData: IUserData): Promise<any | undefined> {
        const { data } = await instance.post<IUserData>('/site/login', userData);
        return data
    },


    async Register(
        userData: IUserData
    ): Promise<IResponseUserData | undefined> {
        const {data} = await instance.post<IResponseUserData>('/site/register', userData)
        return data;
    },



    async RegisterConfirm(userData: { tokenConfirm: string }): Promise<any | undefined> {
        const { data } = await instance.post<IUserData>('/site/register/confirm', userData);
        return data;
    },



    async refreshTokenRequest(userData: { refreshToken: string }): Promise<any | undefined> {
        try {
            const { data } = await instance.post('/site/refresh', userData);
            return data;
        } catch (error) {
            console.error('Ошибка при обновлении токена:', error);
            return undefined;
        }
    },



}