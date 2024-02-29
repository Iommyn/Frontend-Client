import React, {useState} from 'react';
import {AuthService} from "../../../service/AuthService";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import Logo from '../../../assets/icons/Logout_logo.png'
import MyInput from "../../../components/UI/input/MyInput";
import MyButton from "../../../components/UI/button/MyButton";

const RegisterConfirm = () => {
    const navigate = useNavigate()
    const [confirmationCode, setConfirmationCode] = useState<string>('')

    const registerConfirmHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = await AuthService.RegisterConfirm({ tokenConfirm: confirmationCode });
            if (data) {
                toast.success('Вы успешно зарегистрировались!');
                navigate('/auth');
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
                Подтвердите регистрацию!
            </h1>
            <form className='flex justify-center mt-2' onSubmit={registerConfirmHandler}>
                <div className="flex flex-col">
                    <MyInput
                        type="text"
                        placeholder="Введите код"
                        value={confirmationCode}
                        onChange={(e) => setConfirmationCode(e.target.value)}
                    />
                    <MyButton>Подтвердить регистрацию</MyButton>
                </div>
            </form>
        </section>
    )
};

export default RegisterConfirm;