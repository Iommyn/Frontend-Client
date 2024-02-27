import React from 'react';
import s from './header.module.css'
import download_purple from '../../assets/page_play/download_purple.svg'
import download_blue from '../../assets/page_play/download_blue.svg'
import download_green from '../../assets/page_play/download_green.svg'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <main className={s.page}>
            <section className={s.download}>
                <div className={s.container}>
                    <h1 className={s.page_title}>Скачать лаунчер</h1>
                    <div className={s.download_section}>

                        <div className={s.download_step__purple}>
                            <div className={s.download_step__icon}>
                                <img src={download_purple}/>
                            </div>
                            <span className={s.download_step__number}>1 шаг</span>
                            <p className={s.download_step__p}>
                                Зарегистрироваться или авторизироваться
                            </p>
                        </div>


                        <div className={s.download_step__blue}>
                            <div className={s.download_step__icon}>
                                <img src={download_blue}/>
                            </div>
                            <span className={s.download_step__number}>2 шаг</span>
                            <p className={s.download_step__p}>
                                Скачать лаунчер
                            </p>
                            <div className={s.download_links}>
                                <Link className={s.download_link} to={'https://launcher.corecraft.ru/CoreCraft.exe'}>Windows</Link>
                            </div>
                        </div>


                        <div className={s.download_step__green}>
                            <div className={s.download_step__icon}>
                                <img src={download_green}/>
                            </div>
                            <span className={s.download_step__number}>3 шаг</span>
                            <p className={s.download_step__p}>
                                Запустить лаунчер и начать игру
                            </p>
                        </div>
                    </div>
                    <div className={s.download_info}>
                        <span className={s.download_info__span}>
                    Проблема с запуском лаунчера? Скачайте -
                </span>
                        <Link className={s.download_link__webview} to={'https://developer.microsoft.com/en-us/microsoft-edge/webview2/?form=MA13LH'}>WebView</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Header;