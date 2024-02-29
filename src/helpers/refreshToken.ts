import {AuthService} from "../service/AuthService";
import {setTokenToLocalStorage} from "./localstorage";
import {login} from "../store/user/userSlice";

export const refreshAndSetToken = (token, refreshToken, dispatch ) => {
    AuthService.refreshTokenRequest({ refreshToken }).then((response) => {
        if (response && response.token) {
            // Обновляем токен в локальном хранилище
            setTokenToLocalStorage(token, response.token);

            // Обновляем время истечения refresh token
            const newRefreshTokenExpiration = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 часа
            localStorage.setItem('refreshTokenExpiration', JSON.stringify(newRefreshTokenExpiration));

            const user = { token: response.token };
            dispatch(login(user));
            localStorage.setItem('isAuth', JSON.stringify(true));
        }
    });
};