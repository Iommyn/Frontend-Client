import s from './section.module.css'

import Slider from '../slider/Slider';
import Vk from '../../../assets/section_socials/vk.png'
import Ds from '../../../assets/section_socials/ds.png'
import React from 'react';
import { button } from '../../../information/help';


const Section = () => {

    return (
        <main className={s.main}>
            <section className={s.main_servers}>
                <div className={s.container}>
                    <div className={s.section_title}>
                        <h2 className={s.h2}>Сервера</h2>
                    </div>
                            <Slider />
                </div>
            </section>

            <section className={s.play_with_friends}>
                <div className={s.container}>
                    <div className={s.section_title__play}>
                        <h2 className={s.h2_play}>Играй с друзьями</h2>
                    </div>
                    <div className={s.socials}>
                        <div className={s.socials_vk}>
                            <div className={s.social_img}>
                                <img src={Vk}/>
                            </div>
                            <span className={s.social_title}>Вконтакте</span>
                            <a href={button.urlVK} className={s.social_link}>Перейти в группу</a>
                        </div>
                        <div className={s.socials_ds}>
                            <div className={s.social_img}>
                                <img src={Ds}/>
                            </div>
                            <span className={s.social_title}>Дискорд</span>
                            <a href={button.urlDS} className={s.social_link}>Перейти в канал</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
};

export default Section;