import NavbarLinks from '../UI/navbar/NavbarLinks';
import ProfileLogout from '../UI/navbar/ProfileLogout';
import s from './Navbar.module.css'
import {Link} from 'react-router-dom';
import logo from "../../../public/logo.svg";
import React, { useState } from 'react';
import LoginRegBtn from "../UI/navbar/LoginRegBtn";
import {useAuth} from "../../hooks/useAuth";


const NavbarApp = () => {
    const isAuth = useAuth();
    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
    };

    const handleClose = () => {
        setBurgerOpen(false);
    };

    return (
        <nav className={s.nav}>
            <div className={s.pink_circle}></div>
            <div className={s.Glow_Blue}></div>

            <div className={s.wrapper}>
                <div className={s.nav_list}>
                    <div className='relative hover:animate-spin'>
                        <Link to='/'>
                            <img className={s.logo} src={logo} alt='logo'/>
                        </Link>
                    </div>
                    <div className={s.nav_list3}>
                        {isAuth ? (
                            <ProfileLogout/>
                        ) : (
                            <LoginRegBtn/>
                        )}
                    </div>
                    <div onClick={toggleBurger} className={s.burger_menu}>
                        <div className={s.burger_icon}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    {burgerOpen && (
                        <div className={s.burger_menu_items}>
                            <div className={s.close_button} onClick={handleClose}>
                            </div>
                            <NavbarLinks/>
                        </div>
                    )}
                    <div className={s.nav_list2}>
                        <NavbarLinks/>
                        {isAuth ? (
                            <ProfileLogout/>
                        ) : (
                            <LoginRegBtn/>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarApp;