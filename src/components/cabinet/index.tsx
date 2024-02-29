import React from 'react';
import s from "./index.module.css";

const Index = () => {
    return (
        <main className={s.page}>
            <section className={s.download}>
                <div className={s.container}>
                    <h1 className={s.page_title}>Личный кабинет</h1>
                    <div className="flex flex-col">
                        <div className={s.economy_rub}>

                        </div>
                        <div className={s.economy_coins}>

                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Index;