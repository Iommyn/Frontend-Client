import React from "react";
import s from './Modal.module.css'
import image from '../../../assets/icons/Logout_logo.png'
  const Modal = ({ isOpen, message, onConfirm, onCancel }) => {
    if (!isOpen) {
      return null;
    }

  return (
    <div className={s.modal}>
      <div className={s.modal_content}>
        <img className={s.logo} src={image} />
        <p className={s.title}>{message}</p>
        <button className={s.btn} onClick={onConfirm}>Подтвердить</button>
        <button className={s.btn} onClick={onCancel}>Отменить</button>
      </div>

    </div>
  );
  };

export default Modal;