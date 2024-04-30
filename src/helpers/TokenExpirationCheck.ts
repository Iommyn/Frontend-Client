import { useEffect, useState } from 'react';
import moment from 'moment';
import { toast } from "react-toastify";
import { useAppDispatch } from "../store/hooks";
import { getTokenFromLocalStorage, removeTokenFromLocalStorage } from "./localstorage";
import { logout, login } from "../store/user/userSlice";
import { useNavigate } from "react-router-dom";

const TokenExpirationCheck = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [tokenExpired, setTokenExpired] = useState(false);

  useEffect(() => {
    const token = getTokenFromLocalStorage();
    if (token) {
      const user = { token };
      dispatch(login(user));
      localStorage.setItem('isAuth', JSON.stringify(true));

      const checkTokenExpiration = () => {
        const currentTime = new Date().getTime();
        const tokenExpirationString = localStorage.getItem('tokenExpiresAt');
        const tokenExpiration = moment(tokenExpirationString, 'YYYY-MM-DDTHH:mm:ss.SSSSSSSSSZ').valueOf();
        if (currentTime > tokenExpiration) {
          setTokenExpired(true);
          dispatch(logout());
          removeTokenFromLocalStorage('token');
          removeTokenFromLocalStorage('tokenExpiresAt');
          removeTokenFromLocalStorage('isAuth');
          removeTokenFromLocalStorage('refreshToken');
          removeTokenFromLocalStorage('refreshTokenExpiresAt');
          removeTokenFromLocalStorage('username');
          navigate("/auth");
        }
      };

      checkTokenExpiration();

      const interval = setInterval(checkTokenExpiration, 6000);

      return () => clearInterval(interval);
    }
  }, [dispatch, navigate]);

  if (tokenExpired) {
    return null;
  }

  return null;
};

export default TokenExpirationCheck;