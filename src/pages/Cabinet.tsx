import NavbarApp from "../components/Navbar/Navbar";
import FooterApp from "../components/Footer/Footer";
import Section from "../components/Сabinet/Cabinet";
import React from "react";

const Cabinet = () => {
  return (
    <div>
      <NavbarApp />
      <Section />
      <FooterApp />
    </div>
  );
};

export default Cabinet;
