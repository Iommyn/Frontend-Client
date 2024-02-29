import React, {useState} from "react";
import s from "../../Navbar/Navbar.module.css";
import {Link} from "react-router-dom";
import dropdownIcon from "../../../assets/icons/dropdownIcon.svg";
import {servers} from "../../../information/servers";


export default function ServersLink() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    return (
        <div className={s.dropdown}>
            <a onClick={toggleDropdown} className={s.Button}>
                Сервера <img className='pl-2' src={dropdownIcon} />
            </a>

            {isDropdownOpen && (
                <div className={s.dropdownContent}>
                    <div className={s.ItemTitle}>
                        Сервера 1.7.10
                    </div>
                    <div className='top-0 mt-[17px] mb-[8px] block h-[3px] left-0 right-0 bg-gray-600'></div>
                    <div className='inline-block'>
                        <div className='flex flex-col'>
                            {servers.map(({name, link}, index) => (
                                <Link key={index} to={link} className={s.Item}> {name} </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};