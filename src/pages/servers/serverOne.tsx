import React from 'react';
import NavbarApp from "../../components/Navbar/Navbar";
import Index from "../../components/ServersPage";
import FooterApp from "../../components/Footer/Footer";

const ServerOne = () => {
    return (
        <div>
            <NavbarApp/>
            <Index/>
            <FooterApp/>
        </div>
    );
};

export default ServerOne;