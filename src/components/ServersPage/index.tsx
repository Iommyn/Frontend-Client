import React, { useState } from "react";
import s from "./index.module.css";
import image from '../../assets/page_server/img/image.png'
import launchDate from '../../assets/page_server/icons/launchDate.png'
import pvp from '../../assets/page_server/icons/pvp.png'
import version from '../../assets/page_server/icons/version.png'
import vipe from '../../assets/page_server/icons/vipe.png'
import vipeEnder from '../../assets/page_server/icons/vipeEnder.png'
import vipeWorld from '../../assets/page_server/icons/vipeWorld.png'
import imgMods from '../../assets/page_server/icons/imgMods.png'
import Slider from "../MainPage/slider/Slider";
const Index = () => {


  const [elements, setElements] = useState([
    { id: 1, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
    { id: 2, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
    { id: 3, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
    { id: 4, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
    { id: 5, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
    { id: 6, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
    { id: 7, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
    { id: 8, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
    { id: 9, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
    { id: 10, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
    { id: 11, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
    { id: 12, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
    { id: 13, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
    { id: 14, img: imgMods, title: "DraconicEvolution", description: "Мод добавляет осла и дракона, можно их спаривать" },
  ]);




  return (
    <main className={s.page}>
      <section className={s.download}>
        <div className={s.container}>
          <h1 className={s.page_title}>TechnoMagic</h1>
          <h2 className={s.page_description}>
            Здесь вас ждут уникальные крафты и механики, этот сервер подходит, если не можешь выбрать между технической
            и магической сборкой
          </h2>
          <img className={s.image} src={image} />
          <button className={s.button}>
            Начать игру
          </button>

          <div className="ml-[150px] grid grid-cols-2 gap-x-0 gap-y-[40px]">
            <div className={s.test}>
              <img className="absolute pt-6" src={launchDate} />
              <div className="text-white relative ml-12 pt-4">
                <h1 className='text-footer-color text-[16px] font-semibold'>Дата запуска</h1>
                <h2 className='text-[18px] font-semibold'>01.01.2024</h2>
              </div>
            </div>
            <div className={s.test}>
              <img className="absolute pt-6" src={pvp} />
              <div className="text-white relative ml-12 pt-4">
                <h1 className="text-footer-color text-[16px] font-semibold">PVP Режим</h1>
                <h2 className="text-[18px] font-semibold">Включено</h2>
              </div>
            </div>
            <div className={s.test}>
              <img className="absolute pt-6" src={version} />
              <div className="text-white relative ml-12 pt-4">
                <h1 className="text-footer-color text-[16px] font-semibold">Версия игры</h1>
                <h2 className="text-[18px] font-semibold">1.7.10</h2>
              </div>
            </div>
            <div className={s.test}>
              <img className="absolute pt-6" src={vipe} />
              <div className="text-white relative ml-12 pt-4">
                <h1 className="text-footer-color text-[16px] font-semibold">Последний вайп</h1>
                <h2 className="text-[18px] font-semibold">01.01.2024</h2>
              </div>
            </div>
            <div className={s.test}>
              <img className="absolute pt-6" src={vipeEnder} />
              <div className="text-white relative ml-12 pt-4">
                <h1 className="text-footer-color text-[16px] font-semibold">Вайп эндер мира</h1>
                <h2 className="text-[18px] font-semibold">Каждые 2 недели</h2>
              </div>
            </div>
            <div className={s.test}>
              <img className="absolute pt-6" src={vipeWorld} />
              <div className="text-white relative ml-12 pt-4">
                <h1 className='text-footer-color text-[16px] font-semibold'>Вайп доп мира</h1>
                <h2 className='text-[18px] font-semibold'>Каждый месяц</h2>
              </div>
            </div>
            <div>
              <div className={s.title}>
                <h2 className={s.h2}>Моды сервера</h2>
                <div className="relative flex justify-center mt-[120px] flex-wrap">
                  <div className="ml-[400px] grid grid-cols-3 gap-x-[40px] ">
                    {elements.map((element) => (
                      <div key={element.id} className="relative text-white p-3"
                           style={{ maxWidth: "280px", margin: "0 auto" }}>
                        <div style={{ wordBreak: "break-all" }}>
                          <img
                            className={s.imageMods}
                            src={element.img}
                          />
                          <h3 className="text-[18px] font-semibold mb-1">{element.title}</h3>
                          <p className="text-footer-color text-[16px] font-semibold">{element.description}</p>
                        </div>
                      </div>
                    ))}
                    <div className="absolute top-0 left-[300px] ml-[-27px] w-[2px] h-full bg-gray-800"></div>
                    <div className="absolute top-0 left-[600px] ml-[5px] ml-[-5px] w-[2px] h-full bg-gray-800"></div>
                  </div>
                </div>
              </div>
              <div className={s.servers}>
              <h2 className={s.h2}>Другие сервера</h2>
              <div className={s.wrapper}>
                <Slider />
              </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
    ;
};

export default Index;
