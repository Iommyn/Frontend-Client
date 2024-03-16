import React from "react";
import s from "./Dies.module.css";
import { Link } from "react-router-dom";

const Dies = () => {
  return (
    <main className={s.page}>
      <section className={s.download}>
        <div className={s.container}>
          <h1 className={s.page_title}>Донат</h1>
          <div className="flex justify-center text-white">
            <div className={s.dieOne}>
              <h2 className={s.h2}>Vip</h2>
              <h3 className={s.h3}>
                Небольшое ускорение на <br />
                перед
              </h3>
              <strong className={s.price}>
                ₽99<span className={s.month}>/месяц</span>
              </strong>
              <Link to="#">
                <button className={s.button}>Купить</button>
              </Link>
            </div>
            <div className={s.dieTwo}>
              <h2 className={s.h2}>Premium</h2>
              <h3 className={s.h3}>
                Уф, это уже что-то того <br />
                стоящее, смекаешь?
              </h3>
              <strong className={s.price}>
                ₽349<span className={s.month}>/месяц</span>
              </strong>
              <Link to="#">
                <button className={s.button}>Купить</button>
              </Link>
            </div>
            <div className={s.dieThree}>
              <h2 className={s.h2}>Zeus</h2>
              <h3 className={s.h3}>
                Всемиро известная легенда и <br />
                просто громитель кланов
              </h3>
              <strong className={s.price}>
                ₽749<span className={s.month}>/месяц</span>
              </strong>
              <Link to="#">
                <button className={s.button}>Купить</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dies;
