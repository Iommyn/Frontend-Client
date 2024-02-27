import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton.js";
import Logo from "../assets/icons/Logout_logo.png"
import {Link, useNavigate} from "react-router-dom";
import {FC, useState} from "react";
import React from "react";
import {AuthService} from "../service/AuthService";
import {toast} from "react-toastify";
import {setTokenToLocalStorage} from "../helpers/localstorage.helper";
import {useAppDispatch} from "../store/hooks";
import {login} from "../store/user/userSlice";



const Auth: FC = () => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const dispatch = useAppDispatch()
    const navigate = useNavigate();


    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = await AuthService.login({username, password});
            if (data) {
                setTokenToLocalStorage('token', data.token);
                setTokenToLocalStorage('refreshToken', data.refreshToken);
                dispatch(login(data));
                localStorage.setItem('isAuth', JSON.stringify(true));
                toast.success('Вы успешно прошли авторизацию');
                navigate('/');
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }


    return (
        <section className='h-[100px] mb-[380px] pt-28'>
            <h1 className='mb-[70px] flex justify-center'>
                <Link to="/">
                    <img src={Logo} alt="Логотип"/>
                </Link>
            </h1>
            <h2 className='text-white text-center text-[42px] font-extrabold'>Вход в аккаунт</h2>
            <h3 className='text-white text-center text-[16px] font-semibold mt-[12px] mb-[50px]'>Да, я тебя помню,
                золота не дам :с</h3>
            <form className='flex justify-center mt-2' onSubmit={loginHandler} >
                <div className="flex flex-col">
                    <h1 className='text-white'>Введите Ник</h1>
                    <MyInput
                        type="text"
                        placeholder="Maskott"
                        onChange={(e) => setUsername(e.target.value)} />

                    <h1 className='text-white'>Введите пароль</h1>
                    <MyInput
                        type="password"
                        placeholder="••••••••••••••••"
                        onChange={(e) => setPassword(e.target.value)} />

                    <MyButton>Войти</MyButton>

                    <h1 className="text-footer-color text-center">Забыли создать аккаунт? <Link className='text-download-link hover:text-download-link' to='/signup'>Зарегистрироваться</Link></h1>
                </div>
            </form>
        </section>
    );
};

export default Auth;

