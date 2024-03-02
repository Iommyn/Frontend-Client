import React, {useState} from 'react';
import {AuthService} from "../../../service/AuthService";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import Logo from '../../../assets/icons/Logout_logo.png'
import MyInput from "../../../components/UI/input/MyInput";
import MyButton from "../../../components/UI/button/MyButton";
import ReCAPTCHA from "react-google-recaptcha";
import s from "./recovery.module.css";

const Recovery = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [recaptchaValue, setRecaptchaValue] = useState<string>('');

    const registerConfirmHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            // Проверяем, что reCAPTCHA пройдена
            if (!recaptchaValue) {
                toast.error('Пожалуйста, пройдите проверку reCAPTCHA');
                return;
            }
            const data = await AuthService.Recovered({username, email});
            if (data) {
                toast.warning('Потвердите код, который находится на вашей почте!');
                navigate('/recoveryConfirm');
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <section className={s.section}>
            <div className='mb-[70px] flex justify-center'>
                <Link to="/">
                    <img src={Logo} alt="Логотип"/>
                </Link>
            </div>
            <h1 className={s.h1_Confirm}>
                Восстановление пароля
            </h1>
            <form className='flex justify-center mt-2' onSubmit={registerConfirmHandler}>
                <div className="flex flex-col">
                    <MyInput
                        type="text"
                        placeholder="Введите ник"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <MyInput
                        type="text"
                        placeholder="Введите Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <ReCAPTCHA
                        className='flex justify-center'
                        sitekey="6Leq1IIpAAAAAHCT9atezPoZ1dCcQOFU2Mm9ZUBt"
                        onChange={(value) => setRecaptchaValue(value)}
                    />
                    <MyButton>Продолжить</MyButton>
                </div>
            </form>
        </section>
    )
};

export default Recovery;