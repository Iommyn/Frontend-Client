import React, { useRef, useState } from "react";
import s from "./Modal.module.css";
import blue from '../../../assets/page_cabinet/img/blue_img.png'
import purple from '../../../assets/page_cabinet/img/purple_img.png'
import red from '../../../assets/page_cabinet/img/red_img.png'

const ModalDonate = ({ isOpen, message, onReplenish, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const inputRef = useRef(null);
  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={s.modal}>
      <div className={s.modal_content_donate}>
        <button className={`ml-[440px] inline-block max-w-min text-white hover:text-gray-600 ${s.closeButton}`}
                onClick={onClose}>X
        </button>
        <p className={s.titleDtn}>{message}</p>
        <div>
          <div className={s.amount_buttons}>
            <div onClick={() => handleAmountSelect("99")}
                 className="relative cursor-pointer animate-pulse transition duration-500 ease-in-out hover:-translate-x-0.5 hover:scale-110">
              <div className="absolute text-[38px] font-bold inset-0 text-white mx-[25px] my-[35px] z-10">
                ₽99
              </div>
              <img src={blue} alt="Blue Image" className="block w-[120px]" />
            </div>
            <div onClick={() => handleAmountSelect("399")}
                 className="relative cursor-pointer animate-pulse transition duration-500 ease-in-out hover:-translate-x-0.5 hover:scale-110">
              <div className="absolute text-[38px] font-bold inset-0 text-white mx-[20px] my-[35px] z-10">
                ₽399
              </div>
              <img src={red} className="block w-[120px]" />
            </div>
            <div onClick={() => handleAmountSelect("749")}
                 className="relative cursor-pointer animate-pulse transition duration-500 ease-in-out hover:-translate-x-0.5 hover:scale-110">
              <div className="absolute text-[38px] font-bold inset-0 text-white mx-[20px] my-[35px] z-10">
                ₽749
              </div>
              <img src={purple} className="block w-[125px]" />
            </div>
          </div>
          <h1 className={s.h1}>Или выберите сумму</h1>
          <input
            ref={inputRef}
            style={{ outline: 'none', border: 'none' }}
            className={s.balance}
            type="text"
            value={selectedAmount !== "" ? `${selectedAmount} ₽` : ""}
            onChange={(e) => {
              const input = e.target.value.replace(/\D/g, "");
              const cursorPosition = inputRef.current.selectionStart;

              let updatedInput = input;
              if (parseInt(input) > 100000) {
                updatedInput = "100000";
              }

              setSelectedAmount(updatedInput);

              setTimeout(() => {
                inputRef.current.selectionStart = cursorPosition;
                inputRef.current.selectionEnd = cursorPosition;
              }, 0);
            }}
          />
        </div>
        <button className={s.btnDonate} onClick={onReplenish}>Пополнить</button>
      </div>
    </div>
  );
};

export default ModalDonate;