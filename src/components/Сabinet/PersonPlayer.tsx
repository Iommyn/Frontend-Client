import React, { useState } from "react";
import { instance } from "../../api/axios.api"; // Импортируем экземпляр axios из файла с настройками запросов
import { toast } from "react-toastify";
import banner from '../../assets/page_cabinet/img/banner.png'
import s from './Cabinet.module.css'
const PersonPlayer = () => {
  const [skinUrl, setSkinUrl] = useState("");

  const skinAdd = async (e) => {
    try {
      e.preventDefault();

      const response = await instance.get("/api/skin");
      const data = response.data;

      if (data && data.skinUrl) {
        setSkinUrl(data.skinUrl); // Обновляем URL скина
        toast.success("Скин успешно загружен!");
      } else {
        toast.error("Не удалось загрузить скин");
      }
    } catch (error) {
      console.error("Ошибка при получении скина", error);
      toast.error("Произошла ошибка при загрузке скина");
    }
  };

  return (
    <div className='flex mt-20 ml-[300px]'>
      <img src={skinUrl} alt="Skin" className='border text-center pt-44 text-[40px] border-gray-800 w-[310px] h-[450px] ml-[-220px]' />
      <div className='flex flex-col mx-[40px]'>
        <div className='mb-[32px]'>
          <img src={banner} />
        </div>
        <div>
          <div>
            <h1 className={s.title}>Внешний вид</h1>
          </div>
          <h2 className='text-footer-color mb-[12px] font-ProximSemiBold text-[18px]'>Скин</h2>
          <button className={s.skin_btn} onClick={skinAdd}>Сменить скин</button>
          <button className={s.skin_btn_delete} onClick={skinAdd}>Удалить скин</button>
        </div>
        <div
          className="relative left-0 right-0 my-[26px] w-[570px] top-0 block h-[3px] bg-gray-800">
        </div>
        <div>
          <h2 className='text-footer-color mb-[12px] font-ProximSemiBold text-[18px]'>Плащ</h2>
          <button className={s.plaw_btn} onClick={skinAdd}>Сменить плащ</button>
          <button className={s.plaw_btn_delete} onClick={skinAdd}>Удалить плащ</button>
        </div>
      </div>
    </div>
  );
};

export default PersonPlayer;