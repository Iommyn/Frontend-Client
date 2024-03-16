import React, { useEffect, useRef, useState } from "react";
import s from "../../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import dropdownIcon from "../../../assets/icons/dropdownIcon.svg";
import { servers } from "../../../information/servers";

export default function ServersLink() {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Закрыть выпадающее меню
      setIsDropdownOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className={s.dropdown} ref={dropdownRef}>
      <a onClick={handleLinkClick} className={s.Button}>
        Сервера <img className="mt-[11px] h-[6px] pl-2" src={dropdownIcon} />
      </a>

      {isDropdownOpen && (
        <div className={s.dropdownContent}>
          <div className={s.ItemTitle}>Сервера 1.7.10</div>
          <div className="left-0 right-0 top-0 mb-[2px] mt-[12px] block h-[3px] bg-gray-600"></div>
          <div className="inline-block">
            <div className="flex flex-col">
              {servers.map(({ name, link }, index) => (
                <Link key={index} to={link} className={s.Item}>
                  {" "}
                  {name}{" "}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
