import React, {FC, useState} from 'react';
import s from "../../Navbar/Navbar.module.css";
import dropdownIcon from "../../../assets/icons/dropdownIcon.svg";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../../../store/user/userSlice";
import {removeTokenFromLocalStorage} from "../../../helpers/localstorage.helper";
import {useAppDispatch} from "../../../store/hooks";
import { toast } from 'react-toastify';




const ProfileLogout: FC = () => {


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const logoutHandler = () => {
        dispatch(logout());
        removeTokenFromLocalStorage('token');
        removeTokenFromLocalStorage('refreshToken');
        localStorage.removeItem('isAuth');
        toast.info('Вы успешно вышли!')
        navigate('/');
    }


    return (
        <div className={s.dropdown}>
            <a onClick={toggleDropdown} className={s.Button}> samalet
                <img className='pl-2' src={dropdownIcon} alt="dropdown icon"/>
            </a>
            {isDropdownOpen && (
                <div className={s.dropdownContent}>
                    <Link to="/cabinet" className={s.ItemTitleLogout}>
                        Личный кабинет
                    </Link>
                    <div className='top-0 mt-[17px] mb-[15px] block h-[3px] left-0 right-0 bg-gray-600'></div>
                    <Link to="#" className={s.Item}>
                        Пополнить баланс
                    </Link>
                    <div className='top-0 mt-[17px] mb-[15px] block h-[3px] left-0 right-0 bg-gray-600'></div>
                    <div className='inline-block'>
                        <div className='flex flex-col'>
                            <Link to="#" className={s.Item}>
                                Настройки
                            </Link>
                            <Link to='' className={s.Item} onClick={logoutHandler}>
                                Выйти
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileLogout;