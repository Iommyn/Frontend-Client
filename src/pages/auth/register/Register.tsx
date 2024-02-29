import React, {FC, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Logo from '../../../assets/icons/Logout_logo.png'
import MyInput from "../../../components/UI/input/MyInput";
import MyButton from "../../../components/UI/button/MyButton";
import {toast} from "react-toastify";
import {AuthService} from "../../../service/AuthService";
import ReCAPTCHA from "react-google-recaptcha";
import s from "./register.module.css";

const Register: FC = () => {

    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [recaptchaValue, setRecaptchaValue] = useState<string>('');

    const navigate = useNavigate();


    const registerHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            // Проверяем, что reCAPTCHA пройдена

            const data = await AuthService.Register({username, email, password});
            if (data) {
                toast.warning('Потвердите код, который находится на вашей почте!');
                navigate('/confirm');
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }


    return (
        <section className={s.section}>
            <h1 className='mb-[70px] flex justify-center'>
                <Link to="/">
                    <img src={Logo} alt="Логотип"/>
                </Link>
            </h1>
            <h2 className={s.h1}>Регистрация</h2>
            <h3 className='text-white text-center text-[16px] font-semibold mt-[12px] mb-[50px]'>Эй, пс. Заходи, у нас на сервере крутые коровы</h3>
            <form className='flex justify-center mt-2' onSubmit={registerHandler} >
                <div className="flex flex-col">
                    <h1 className={s.h1_input}>Введите Ник</h1>
                    <MyInput
                        type="text"
                        placeholder="nick"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                    />

                    <h1 className={s.h1_input}>Введите Email</h1>
                    <MyInput
                        type="text"
                        placeholder="Example@gmail.com"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />

                    <h1 className={s.h1_input}>Введите пароль</h1>
                    <MyInput
                        type="password"
                        placeholder="•••••••••••••••••••••••••"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <h1 className={s.h1_captcha}>Пройдите проверку</h1>
                    <ReCAPTCHA
                        className={s.captcha}
                        sitekey="6Leq1IIpAAAAAHCT9atezPoZ1dCcQOFU2Mm9ZUBt"
                        onChange={(value) => setRecaptchaValue(value)}
                    />
                    <MyButton>Создать аккаунт</MyButton>
                    <h1 className={s.registerAkk}>Уже есть аккаунт? <Link
                        className='text-download-link hover:text-download-link' to='/auth'>Авторизоваться</Link>
                    </h1>
                </div>
            </form>
        </section>
    );
};

export default Register;