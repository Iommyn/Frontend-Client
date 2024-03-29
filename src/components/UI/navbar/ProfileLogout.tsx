import React, { FC, useEffect, useRef, useState } from "react";
import s from "../../Navbar/Navbar.module.css";
import dropdownIcon from "../../../assets/icons/dropdownIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../store/user/userSlice";
import { removeTokenFromLocalStorage } from "../../../helpers/localstorage";
import { useAppDispatch } from "../../../store/hooks";
import { toast } from "react-toastify";

const ProfileLogout: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const username = localStorage.getItem("username");

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Закрыть выпадающее меню
      setIsDropdownOpen(false);
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
    removeTokenFromLocalStorage("token");
    removeTokenFromLocalStorage("isAuth");
    removeTokenFromLocalStorage("username");
    removeTokenFromLocalStorage("tokenExpiresAt");
    removeTokenFromLocalStorage('refreshToken');
    removeTokenFromLocalStorage('refreshTokenExpiresAt');
    toast.info("Вы успешно вышли!");
    navigate("/");
  };

  return (
    <div className={s.dropdown} ref={dropdownRef}>
      <a onClick={handleLinkClick} className={s.ButtonProfile}>
        {username}
        <img
          className="mt-[10px] h-[6px] pl-2 pr-2"
          src={dropdownIcon}
          alt="dropdown icon"
        />
      </a>
      {isDropdownOpen && (
        <div className={s.dropdownContentProfile}>
          <div className="flex flex-col">
            <Link to="/cabinet" className={s.ItemTitleLogout}>
              Личный кабинет
            </Link>
            <div className="left-0 right-0 top-0 mb-[15px] mt-[17px] block h-[3px] bg-gray-600"></div>
            <Link to="/balance" className={s.Item}>
              Пополнить баланс
            </Link>
          </div>
          <div className="left-0 right-0 top-0 mb-[15px] mt-[17px] block h-[4px] bg-gray-600"></div>
          <div className="inline-block">
            <div className="flex flex-col">
              <Link to="" className={s.Item} onClick={logoutHandler}>
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
