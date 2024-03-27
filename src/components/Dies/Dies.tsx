import React, { useState } from "react";
import s from "./Dies.module.css";
import { Link } from "react-router-dom";
import checkMark from '../../assets/icons/checkMark.png'
import elementOne from '../../assets/icons/element_donate1.png'
import elementTwo from '../../assets/icons/element_donate2.png'
import elementThree from '../../assets/icons/element_donate3.png'
import Modal from "../UI/modal/Modal";
const Dies = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  return (
    <main className={s.page}>
      <section className={s.download}>
        <div className={s.container}>
          <h1 className={s.page_title}>Донат</h1>
          <div className="flex justify-center text-white mb-[70px]">
            <div className={s.dieOne}>
              <img className="mt-[42px] ml-[42px] mb-[30px]" src={elementOne} />
              <h2 className={s.h2}>Vip</h2>
              <h3 className={s.h3}>
                Небольшое ускорение на <br />
                перед
              </h3>
              <strong className={s.price}>
                ₽99<span className={s.month}>/месяц</span>
              </strong>
              <button className={s.button} onClick={handleBuyClick}>
                Купить
              </button>
              <Modal
                isOpen={isModalOpen}
                message="Вы уверены, что хотите совершить покупку?"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
              />
              <div className="mt-20">
                <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> 3
                  привата</h3>
                <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> 3
                  привата</h3>
                <h3 className="ml-[70px] "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> 3
                  привата</h3>

                <div
                  className="mx-auto relative left-0 right-0 flex-grow-0 w-[236px] top-0 my-[16px] block h-[3px] bg-gray-700"></div>
              </div>

              <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> /craft
              </h3>
              <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> /feed
              </h3>
              <h3 className="ml-[70px] "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> /enderchest
              </h3>

              <div
                className="mx-auto relative left-0 right-0 flex-grow-0 w-[236px] top-0 my-[16px] block h-[3px] bg-gray-700">
              </div>


              <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> HD Скин
              </h3>
              <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> HD Плащ
              </h3>


            </div>
            <div className={s.dieTwo}>
              <img className="mt-[42px] ml-[42px] mb-[26px]" src={elementTwo} />
              <h2 className={s.h2}>Premium</h2>
              <h3 className={s.h3}>
                Уф, это уже что-то того <br />
                стоящее, смекаешь?
              </h3>
              <strong className={s.price}>
              ₽349<span className={s.month}>/месяц</span>
              </strong>
              <button className={s.button} onClick={handleBuyClick}>
                Купить
              </button>
              <Modal
                isOpen={isModalOpen}
                message="Вы уверены, что хотите совершить покупку?"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
              />
              <div className="mt-20">
                <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]"
                                                     src={checkMark} /> Возможности VIP</h3>
                <div
                  className="mx-auto relative left-0 right-0 flex-grow-0 w-[236px] top-0 my-[16px] block h-[3px] bg-gray-700">
                </div>

                <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> 3
                  привата</h3>
                <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> 3
                  привата</h3>
                <h3 className="ml-[70px] "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> 3
                  привата</h3>

                <div
                  className="mx-auto relative left-0 right-0 flex-grow-0 w-[236px] top-0 my-[16px] block h-[3px] bg-gray-700"></div>
              </div>

              <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> /craft
              </h3>
              <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> /feed
              </h3>
              <h3 className="ml-[70px] "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> /enderchest
              </h3>

              <div
                className="mx-auto relative left-0 right-0 flex-grow-0 w-[236px] top-0 my-[16px] block h-[3px] bg-gray-700">
              </div>


              <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> HD Скин
              </h3>
              <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> HD Плащ
              </h3>


            </div>
            <div className={s.dieThree}>
              <img className="mt-[42px] ml-[42px] mb-[26px]" src={elementThree} />
              <h2 className={s.h2}>Zeus</h2>
              <h3 className={s.h3}>
                Всемиро известная легенда и <br />
                просто громитель кланов
              </h3>
              <strong className={s.price}>
                ₽749<span className={s.month}>/месяц</span>
              </strong>
              <div>
                <button className={s.button} onClick={handleBuyClick}>
                  Купить
                </button>
                <Modal
                  isOpen={isModalOpen}
                  message="Вы уверены, что хотите совершить покупку?"
                  onConfirm={handleConfirm}
                  onCancel={handleCancel}
                />
              </div>
              <div className="mt-20">
                <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]"
                                                     src={checkMark} /> Возможности Premium</h3>
                <div
                  className="mx-auto relative left-0 right-0 flex-grow-0 w-[236px] top-0 my-[16px] block h-[3px] bg-gray-700">
                </div>
                <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> 3
                  привата</h3>
                <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> 3
                  привата</h3>
                <h3 className="ml-[70px] "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> 3
                  привата</h3>

                <div
                  className="mx-auto relative left-0 right-0 flex-grow-0 w-[236px] top-0 my-[16px] block h-[3px] bg-gray-700"></div>
              </div>

              <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> /craft
              </h3>
              <h3 className="ml-[70px] mb-1 "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> /feed
              </h3>
              <h3 className="ml-[70px] "><img className="absolute ml-[-23px] mt-[7px]" src={checkMark} /> /enderchest
              </h3>

            </div>
          </div>

          <Link to="https://forum.corecraft.ru/threads/17/">
            <button className={s.infoBtn}> Подробнее о донате</button>
          </Link>

        </div>
      </section>
    </main>
  );
};

export default Dies;
