import Header from "../components/MainPage/header/Header";
import Section from "../components/MainPage/section/Section";
import NavbarApp from "../components/Navbar/Navbar";
import FooterApp from "../components/Footer/Footer";
import React from "react";
import s from '../pages/auth/auth.module.css'
const Home = () => {

    return (
        <>
            <NavbarApp />
            <Header />
            <Section />
            <FooterApp />
        </>
    );
};

export default Home;