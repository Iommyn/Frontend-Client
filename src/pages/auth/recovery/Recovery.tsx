import React, {useState} from 'react';
import {AuthService} from "../../../service/AuthService";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import Logo from '../../../assets/icons/Logout_logo.png'
import MyInput from "../../../components/UI/input/MyInput";
import MyButton from "../../../components/UI/button/MyButton";

const Recovery = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const registerConfirmHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
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
        <section className='h-[100px] mb-[380px] pt-56'>
            <div className='mb-[70px] flex justify-center'>
                <Link to="/">
                    <img src={Logo} alt="Логотип"/>
                </Link>
            </div>
            <h1 className='text-footer-color text-center text-[25px] font-bold mt-[12px] mb-[30px]'>
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
                    <MyButton>Продолжить</MyButton>
                </div>
            </form>
        </section>
    )
};

export default Recovery;