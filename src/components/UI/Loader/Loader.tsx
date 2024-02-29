import React from 'react';
import s from './Loader.module.css'
const Loader = () => {

    return (
        <div className={s.preloader}>
            <div className='flex flex-col items-center'>
                <div className={s.spinner}>
                </div>
                <h1 className={s.title}>Бот CoreCraft</h1>
                <h2 className={s.information}>Загружает информацию...</h2>
            </div>
        </div>
    );
};

export default Loader;