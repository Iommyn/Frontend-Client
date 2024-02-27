import s from "../../Navbar/Navbar.module.css"
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import ProfileLogout from "./ProfileLogout";
import React from "react";

export default function LoginRegBtn() {

        const [ isAuth, setIsAuth ] = useState<boolean>(false);
        const handleLogout = () => {
            setIsAuth(false);
            localStorage.removeItem('auth');
        }

    return (
        <div className={s.NavAuthReg}>
            {isAuth ? (
                <div className={s.auth}>
                    <ProfileLogout/>
                </div>
            ) : (
                <div>
                    <Link className={s.auth} to="/auth">Логин</Link>
                    <Link className={s.reg} to="/signup">Регистрация</Link>
                </div>
            )}
        </div>
    );
}