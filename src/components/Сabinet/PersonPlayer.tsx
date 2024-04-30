import React, { useEffect, useRef, useState } from "react";
import banner from '../../assets/page_cabinet/img/banner.png';
import s from './Cabinet.module.css';
import { SkinViewer } from 'skinview3d';

import { toast } from "react-toastify";
import { SkinService } from "../../service/SkinService";

function PersonPlayer() {

  const skinContainerRef = useRef<HTMLCanvasElement>(null);
  const skinFileInputRef = useRef<HTMLInputElement>(null);
  const capeFileInputRef = useRef<HTMLInputElement>(null);
  const [skin, setSkin] = useState('')
  const [cape, setCape] = useState('')


  useEffect(() => {
    const username = localStorage.getItem('username');
    const timestamp = new Date().getTime();
    setSkin(`https://auth.corecraft.ru/site/skin/${username}?t=${timestamp}`)
    setCape(`https://auth.corecraft.ru/site/cape/${username}?t=${timestamp}`)
  }, []);


  useEffect(() => {
    if (skinContainerRef.current && skin && cape) {
      const viewer = new SkinViewer({
        canvas: skinContainerRef.current,
        width: 310,
        height: 450,
        skin: skin,
        cape: cape,
      });
    }
  }, [skin, cape]);


  const uploadSkin = async (e) => {
    e.preventDefault();

    const file = skinFileInputRef.current.files[0];
    if (!file) {
      toast.error('Не выбран файл для загрузки.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    try {
      await SkinService.deleteSkin();
      await SkinService.uploadSkin(formData);
      toast.success('Скин успешно загружен.');

      setSkin(URL.createObjectURL(file));
    } catch (error) {
      toast.error('Ошибка при загрузке скина');
    }
  };


  const deleteSkin = async (e) => {
    e.preventDefault();

    try {
      await SkinService.deleteSkin();
      toast.success('Скин успешно удален');

      const username = localStorage.getItem('username');
      const timestamp = new Date().getTime();
      const skinUrl = `https://auth.corecraft.ru/site/skin/${username}?t=${timestamp}`;
      setSkin(skinUrl);

    } catch (error) {
      toast.error('Ошибка при удалении скина');
    }
  };


  const uploadCape = async (e) => {
    e.preventDefault();

    const file = capeFileInputRef.current.files[0];
    if (!file) {
      toast.error('Не выбран файл для загрузки.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    try {
      await SkinService.uploadCape(formData);
      toast.success('Плащ успешно загружен.');

      setCape(URL.createObjectURL(file));
    } catch (error) {
      toast.error('Ошибка при загрузке плаща');
    }
  };


  const deleteCape = async (e) => {
    e.preventDefault();

    try {
      await SkinService.deleteCape();
      toast.success('Плащ успешно удален');

      const username = localStorage.getItem('username');
      const timestamp = new Date().getTime();
      const capeUrl = `${username}'/*\'${timestamp}`; //Здесь пустая строка БДУЕТ
      setCape(capeUrl);

    } catch (error) {
      toast.error('Ошибка при удалении плаща');
    }
  };



  return (
    <div className='flex mt-20 ml-[300px]'>
      <canvas className='border text-center text-[40px] border-gray-800 ml-[-220px]' ref={skinContainerRef} width={300} height={400} />
      <div className="flex flex-col mx-[40px]">
        <div className="mb-[32px]">
          <img src={banner} />
        </div>
        <div>
          <div>
            <h1 className={s.title}>Внешний вид</h1>
          </div>
          <h2 className="text-footer-color mb-[12px] font-ProximSemiBold text-[18px]">Скин</h2>
          <label className={s.skin_btn}>
            Сменить скин
            <input type="file" onChange={uploadSkin} ref={skinFileInputRef} style={{ display: "none" }} />
          </label>
          <button onClick={deleteSkin} className={s.skin_btn_delete}>Удалить скин</button>
        </div>
        <div className="relative left-0 right-0 my-[26px] w-[570px] top-0 block h-[3px] bg-gray-800"></div>
        <div>
          <h2 className='text-footer-color mb-[12px] font-ProximSemiBold text-[18px]'>Плащ</h2>
          <label className={s.plaw_btn}>
            Сменить плащ
            <input type="file" onChange={uploadCape} ref={capeFileInputRef} style={{ display: "none" }} />
          </label>
          <button onClick={deleteCape} className={s.plaw_btn_delete}>Удалить плащ</button>
        </div>
      </div>
    </div>
  );
}

export default PersonPlayer;