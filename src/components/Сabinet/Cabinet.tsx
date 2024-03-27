import React, { useState, useRef } from "react";
import s from "./Cabinet.module.css";
import check from '../../assets/page_cabinet/icons/img_balance.png';
import ModalDonate from "../UI/modal/ModalDonate";
import PersonPlayer from "./PersonPlayer";
import Settings from "./Settings";
const Cabinet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // устанавливаем начальное значение равным индексу "Персонаж"

  const tabs = [
    'Персонаж',
    'Настройки'
  ];

  const renderComponent = (index) => {
    switch (index) {
      case 0:
        return <PersonPlayer />;
      case 1:
        return <Settings />;
      default:
        return null;
    }
  };

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
          <h1 className={s.page_title}>Личный кабинет</h1>
          <div className={s.economy_rub}>
            <div className={s.wrapper}>
              <img className={s.img_balance} src={check} alt="Balance" />
              <h1 className={s.balance}>Баланс</h1>
              <h2 className={s.money}>0 рублей</h2>
            </div>
            <button className={s.button} onClick={handleBuyClick}>
              Пополнить
            </button>
            {isModalOpen && (
              <ModalDonate
                isOpen={isModalOpen}
                message="Пополнение баланса"
                onReplenish={handleConfirm}
                onClose={handleCancel}
              />
            )}
          </div>
          <div className={s.cabinet_tabs}>
            <div className={s.tabsContainer}>
              <div className={s.grayLine}></div>
              <div className="flex space-x-12">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`${s.tabButton} ${activeTab === index ? s.activeTab : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}

                    {activeTab !== null && (
                      <div
                        className={s.activeLine}
                        style={{
                          width: `${100 / tabs.length}%`,
                          marginLeft: `calc((-${5 / tabs.length}%) / 2 - (${100 / tabs.length / 2}px)`,
                          backgroundColor: activeTab === index ? '#2c67fd' : ''
                        }}
                      ></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            {renderComponent(activeTab)}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cabinet;