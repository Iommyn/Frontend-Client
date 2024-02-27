import NavbarLinks from '../UI/navbar/NavbarLinks';
import ProfileLogout from '../UI/navbar/ProfileLogout';
import s from './Navbar.module.css'
import {Link} from 'react-router-dom';
import logo from "../../../public/logo.svg";
import React, { useState } from 'react';
import LoginRegBtn from "../UI/navbar/LoginRegBtn";
import {useAuth} from "../../hooks/useAuth";

export default function NavbarApp() {
    const isAuth = useAuth()

    return (
        <nav className={s.nav}>

            <div className={s.pink_circle}></div>
            <div className={s.Glow_Blue}></div>

            <div className={s.wrapper}>
                <div className={s.nav_list}>
                    <div className='relative hover:animate-spin'>
                        <Link to='/'>
                            <img src={logo} alt='logo'/>
                        </Link>
                    </div>
                    <NavbarLinks/>
                    {isAuth ? (
                        <ProfileLogout />
                    ) : (
                        <LoginRegBtn/>
                    )}
                </div>
            </div>
        </nav>
    )
}