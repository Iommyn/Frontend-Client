import React from 'react';
import s from './footer.module.css';
import Logo from '../../../public/logo.svg';
import vk from '../../assets/footer_socials/vk.svg'
import ds from '../../assets/footer_socials/ds.svg'
import {servers} from '../../information/servers'
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { button } from '../../information/help';


function AddServers (props) {
    return (
        <div>
            {props.name} {props.link} {props.key}
        </div>
    )
}

    const scrollToTop = () => {
        scroll.scrollToTop();
    };


export default function FooterApp () {
    return (
        <footer className={s.footer}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.content}>
                        <div className={s.content__links}>

                            <a
                                className={s.content_logo}
                                onClick={scrollToTop}
                            >
                                <img src={Logo} className={s.logo}/>
                            </a>

                            <div className={s.links_block}>
                                <h6 className={s.title}>Где можно нас найти:</h6>
                                <div className={s.socials}>
                                    <a href={button.urlDS} className={s.social_ds}>
                                        <img src={ds}/>
                                    </a>
                                    <a href={button.urlVK} className={s.social_vk}>
                                        <img src={vk}/>
                                    </a>
                                </div>
                            </div>
                            <div className={s.links_block}>
                                <h6 className={s.title}>Навигация</h6>
                                <div className={s.links}>
                                    <a href={button.urlForum} className={s.link_a}>Форум</a>
                                    <a href={button.urlForumRules} className={s.link_a}>Правила</a>
                                    <a href={button.urlVK} className={s.link_a}>- Написать нам</a>
                                </div>
                            </div>

                            <div className={s.links_block}>
                                <h6 className={s.title}>Сервера</h6>
                                <div className={s.links}>
                                    {servers.map(({name, link}, index) => (
                                        <a key={index} href={link} className={s.link_a}>
                                            <AddServers name={name}/>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className={s.links_block}>
                                <h6 className={s.title}>Помощь</h6>
                                <div className={s.links}>
                                    <Link to="/play" className={s.link_a}>Скачать лаунчер</Link>
                                    <a href={button.urlVK} className={s.link_a}>- Тех. Поддержка</a>
                                    <a href={button.urlVK} className={s.link_a}>- Сотрудничество</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={s.copy}>
                <div className={s.container}>
                    <span className={s.copyright}>Copyright © 2024 Corecraft. Все права защищены.</span>
                </div>
            </div>
        </footer>
    );
}
