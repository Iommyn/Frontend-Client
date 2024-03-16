import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "../../Navbar/Navbar.module.css";
import ServersLink from "./ServersLink";
import { button } from "../../../information/help";

const NavbarLinks = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className={s.NavbarLinks}>
      <Link
        to="/play"
        className={`${activeLink === "/play" ? "text-gray-500" : "hover:text-gray-500"}`}
        onClick={() => handleLinkClick("/play")}
      >
        Играть
      </Link>
      <Link
        to="/donate"
        className={`${activeLink === "/donate" ? "text-gray-500" : "hover:text-gray-500"}`}
        onClick={() => handleLinkClick("/donate")}
      >
        Донат
      </Link>
      <ServersLink />
      <Link
        to="https://forum.corecraft.ru/"
        className={`${activeLink === "/forum" ? "text-gray-500" : "hover:text-gray-500"}`}
        onClick={() => handleLinkClick("/forum")}
      >
        Форум
      </Link>
      <a
        href={button.urlForumRules}
        className={`${activeLink === "/rules" ? "text-gray-500" : "hover:text-gray-500"}`}
        onClick={() => handleLinkClick("/rules")}
      >
        Правила
      </a>
    </div>
  );
};

export default NavbarLinks;
