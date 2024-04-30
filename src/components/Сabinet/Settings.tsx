import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import s from "./Cabinet.module.css";
import { toast } from "react-toastify";
import { AuthService } from "../../service/AuthService";


const Settings = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleChange = (e) => {
    if (e.target.name === "oldPassword") {
      setOldPassword(e.target.value);
    } else if (e.target.name === "newPassword") {
      setNewPassword(e.target.value);
    } else if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  };



    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      await AuthService.refreshAccessToken(localStorage.getItem('refreshToken'));

      try {
        const data = await AuthService.resetPassword({ oldPassword, newPassword });
        if (data) {
          toast.success("Пароль изменен!");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Пароли не совпадают");
    }
  };

  return (
    <div className='bg-dies-help rounded-[8px] relative w-[441px] h-[489px] mt-12 p-4'>
      <h2 className="text-[20px] my-[42px] text-footer-color mx-[130px] font-bold mb-[38px]">Смена пароля</h2>

      <form onSubmit={handleFormSubmit}>
        <div className="mx-[30px] mb-2 text-footer-color">Введите старый пароль</div>
        <MyInput
          type="password"
          name="oldPassword"
          value={oldPassword}
          onChange={handleChange}
          style={{ width: '357px', marginLeft: '30px', outline: 'none', marginTop: '0px' }}
        />

        <div className="mb-2 mx-[30px] text-footer-color">Введите новый пароль</div>
        <MyInput
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handleChange}
          style={{ width: '357px', marginLeft: '30px', outline: 'none', marginTop: '0px' }}
        />

        <div className="mx-[30px] mb-2 text-footer-color">Повторите новый пароль</div>
        <MyInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          style={{ width: '357px', marginLeft: '30px', outline: 'none', marginTop: '0px' }}
        />
        <button className={s.btnSettings}>Изменить пароль</button>
      </form>
    </div>
  );
};

export default Settings;