import { useEffect, useState } from 'react';
import moment from 'moment';
import { toast } from "react-toastify";
import { useAppDispatch } from "../store/hooks";
import { getTokenFromLocalStorage } from "./localstorage";
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
          localStorage.removeItem('token');
          localStorage.removeItem('tokenExpiresAt');
          localStorage.removeItem('isAuth');
          localStorage.removeItem('username');
          toast.warning('Срок действия токена истек, пожалуйста, авторизуйтесь снова');
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