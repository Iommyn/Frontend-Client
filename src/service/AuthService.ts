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
      tokenExpiresAt: data.tokenExpiresAt,
      refreshToken: data.refreshToken,
      refreshTokenExpiresAt: data.refreshTokenExpiresAt,
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

  async resetPassword(userData: IUserData): Promise<any | undefined> {
    try {
      const response = await instance.post('/middleware/site/password/reset', userData);

      return response.data;
    } catch (error) {
      throw error;
    }
  },


  getSkin: async () => {
    try {
      const { data } = await instance.post("/middleware/site/skin/add");
      return data;
    } catch (error) {
      console.error("Ошибка при получении скина");
    }
  },

  async refreshAccessToken(refreshToken: string): Promise<any | undefined> {
    const { data } = await instance.post("/site/refresh", {
      refreshToken: refreshToken,
    });

    localStorage.setItem("token", data.token);
    localStorage.setItem("tokenExpiresAt", data.tokenExpiresAt);

    instance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
  }


}
