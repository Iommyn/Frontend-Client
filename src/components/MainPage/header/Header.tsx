import s from "../header/header.module.css";
import { Link } from "react-router-dom";
import slideImage from "../../../assets/page_home/slide-image.png";
import React from "react";

export default function Header() {
  return (
    <header className={s.sliderBlock}>
      <div className={s.wrapper}>
        <div className={s.slider}>
          <div className={s.slide}>
            <div className={s.slide__info}>
              <h3>СДЕЛАНО ДЛЯ ТЕБЯ :)</h3>
              <h1>
                Ваш новый дом <br />в Minecraft
              </h1>
              <h2>
                Нам уже больше 4 лет, мы делали этот проект
                <br /> с любовью. Этот проект для всех.
              </h2>
              <Link to="/play">
                <button className={s.button}> Начать игру</button>
              </Link>
            </div>
            <div className={s.slide_img}>
              <img src={slideImage} />
            </div>
          </div>
          <div id="Здесь должен быть бэкенд" className={s.online_amount}>
            <span className={s.online_amount__amount}>0 игроков онлайн</span>
          </div>
        </div>
      </div>
    </header>
  );
}
