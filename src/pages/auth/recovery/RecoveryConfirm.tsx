import React, {useState} from 'react';
import {AuthService} from "../../../service/AuthService";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import Logo from '../../../assets/icons/Logout_logo.png'
import MyInput from "../../../components/UI/input/MyInput";
import MyButton from "../../../components/UI/button/MyButton";
import s from "./recovery.module.css";

const RecoveryConfirm = () => {
    const navigate = useNavigate()

    const [code, setCode] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const registerConfirmHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = await AuthService.RecoveredConfirm({code, password});
            if (data) {
                toast.warning('Вы успешно изменили пароль!');
                navigate('/auth');
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
                Потверждение кода
            </h1>
            <h2 className={s.help}>Код находится на почте!</h2>
            <form className='flex justify-center mt-2' onSubmit={registerConfirmHandler}>
                <div className="flex flex-col">
                    <MyInput
                        type="text"
                        placeholder="Введите код"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />

                    <MyInput
                        type="text"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <MyButton>Продолжить</MyButton>
                </div>
            </form>
        </section>
    )
};

export default RecoveryConfirm;