import React from 'react';
import s from './Loader.module.css'
const Loader = () => {

    return (
        <div className={s.preloader}>
            <div className='flex flex-col items-center'>
                <div className={s.spinner}>
                </div>
                <h1 className='text-center text-webview-link mt-12 text-[40px]'>Бот CoreCraft</h1>
                <h2 className='text-center text-footer-color mt-4 text-[43px]'>Загружает информацию...</h2>
            </div>
        </div>
    );
};

export default Loader;