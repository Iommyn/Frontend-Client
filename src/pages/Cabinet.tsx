import NavbarApp from "../components/Navbar/Navbar";
import FooterApp from "../components/Footer/Footer";
import Section from "../components/cabinet/index";
import React from "react";

const Cabinet = () => {
    return (
        <div>
            <NavbarApp/>
            <Section/>
            <FooterApp/>
        </div>
    );
};

export default Cabinet;