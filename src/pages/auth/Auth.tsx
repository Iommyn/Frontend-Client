import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import Logo from "../../assets/icons/Logout_logo.png";
import { Link, useNavigate } from "react-router-dom";
import React, { FC, useState } from "react";
import { AuthService } from "../../service/AuthService";
import { toast } from "react-toastify";
import { setTokenToLocalStorage } from "../../helpers/localstorage";
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/user/userSlice";
import ReCAPTCHA from "react-google-recaptcha";
import s from "./auth.module.css";


const Auth: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [recaptchaValue, setRecaptchaValue] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      // Проверяем, что reCAPTCHA пройдена

      const data = await AuthService.login({ username, password });
      if (data) {
        setTokenToLocalStorage("token", data.token);
        setTokenToLocalStorage("tokenExpiresAt", data.tokenExpiresAt);
        setTokenToLocalStorage("refreshToken", data.refreshToken);
        setTokenToLocalStorage("refreshTokenExpiresAt", data.refreshTokenExpiresAt);
        dispatch(login(data));
        localStorage.setItem("isAuth", JSON.stringify(true));
        toast.success("Вы успешно прошли авторизацию");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className={s.section}>
      <h1 className="mb-[70px] flex justify-center">
        <Link to="/">
          <img src={Logo} alt="Логотип" />
        </Link>
      </h1>
      <h2 className={s.h1}>Вход в аккаунт</h2>
      <h3 className="mb-[50px] mt-[12px] text-center font-ProximSemiBold text-[16px] text-white">
        Да, я тебя помню, золота не дам :с
      </h3>
      <form className="mt-2 flex justify-center" onSubmit={loginHandler}>
        <div className="flex flex-col">
          <h1 className={s.h1_input}>Введите Ник</h1>
          <MyInput
            type="text"
            placeholder="Maskott"
            onChange={(e) => setUsername(e.target.value)}
          />

          <h1 className={s.h1_input}>Введите пароль</h1>
          <MyInput
            type="password"
            placeholder="••••••••••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />

          <h1 className={s.h1_captcha}>Пройдите проверку</h1>
          <ReCAPTCHA
            className={s.captcha}
            sitekey="6Leq1IIpAAAAAHCT9atezPoZ1dCcQOFU2Mm9ZUBt"
            onChange={(value) => setRecaptchaValue(value)}
          />

          <MyButton>Войти в аккаунт</MyButton>

          <h1 className={s.registerAkk}>
            Забыли создать аккаунт?{" "}
            <Link
              className="text-download-link hover:text-download-link"
              to="/signup"
            >
              Зарегистрироваться
            </Link>
          </h1>
          <h1 className="mb-8 text-center">
            <Link className="text-white" to="/recovery">
              Забыли пароль?
            </Link>{" "}
          </h1>
        </div>
      </form>
    </section>
  );
};

export default Auth;
