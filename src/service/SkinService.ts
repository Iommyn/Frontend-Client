import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localstorage";
import { IUserData } from "../types/types";
import { AuthService } from "./AuthService";
import { a } from "react-spring";


const token = getTokenFromLocalStorage();
const headers = token ? { Authorization: 'Bearer ' + token } : {};

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://auth.corecraft.ru',
  headers: headers,
});


export const SkinService = {

  uploadSkin: async (formData: FormData) => {
    try {
      await AuthService.refreshAccessToken(localStorage.getItem('refreshToken'));
      const response = await instance.post('/middleware/site/skin/add', formData, {
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteSkin: async () => {
    try {
      await AuthService.refreshAccessToken(localStorage.getItem('refreshToken'));
      const response = await instance.delete(`/middleware/site/skin/del`, {

      })
      return response.data
    } catch (error) {
    }
  },

  uploadCape: async (formData: FormData) => {
    try {
      await AuthService.refreshAccessToken(localStorage.getItem('refreshToken'));
      const response = await instance.post('/middleware/site/cape/add', formData, {
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteCape: async () => {
    try {
      await AuthService.refreshAccessToken(localStorage.getItem('refreshToken'));
      const response = await instance.delete(`/middleware/site/cape/del`, {

      })
      return response.data
    } catch (error) {
    }
  },


};