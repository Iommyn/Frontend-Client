import {
  IResponseUserData,
  IUserData,
  IUserDataRecovery,
} from "../types/types";
import { instance } from "../api/axios.api";

export const AuthService = {
  async login(userData: IUserData): Promise<any | undefined> {
    const { data } = await instance.post<IUserData>("/site/login", userData);
    localStorage.setItem("username", data.user.username);
    return {
      token: data.token,
      username: data.user.username,
    };
  },

  async Register(userData: IUserData): Promise<IResponseUserData | undefined> {
    const { data } = await instance.post<IResponseUserData>(
      "/site/register",
      userData,
    );
    return data;
  },

  async RegisterConfirm(userData: {
    tokenConfirm: string;
  }): Promise<any | undefined> {
    const { data } = await instance.post<IUserData>(
      "/site/register/confirm",
      userData,
    );
    return data;
  },

  async Recovered(userData: IUserDataRecovery): Promise<any | undefined> {
    const { data } = await instance.post<IUserData>("/site/recovery", userData);
    return data;
  },

  async RecoveredConfirm(
    userData: IUserDataRecovery,
  ): Promise<any | undefined> {
    const { data } = await instance.post<IUserData>(
      "/site/recovery/confirm",
      userData,
    );
    return data;
  },

  async refreshTokenRequest(userData: {
    refreshToken: string;
  }): Promise<any | undefined> {
    try {
      const { data } = await instance.post("/site/refresh", userData);
      return data;
    } catch (error) {
      console.error("Ошибка при обновлении токена:", error);
      return undefined;
    }
  },
};
