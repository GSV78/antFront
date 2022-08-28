import React from 'react';
import styles from './Servises.module.css';
import {NavLink} from 'react-router-dom'

function Servises() {
  return (
    <div className={styles.container}>
      <h3 className={styles.subTitle}>
        Наша компания оказывает услуги по монтажу и наладке инженерного электрооборудования
      </h3>
      <section className={styles.page_content}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Кондиционеры</h2>
            <p className={styles.copy}>От бытовых до профессиональных климатических систем</p>
            <NavLink to='/conditioners' className={styles.btn}>Подробнее</NavLink>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Видеонаблюдение</h2>
            <p className={styles.copy}>От одиночных ip-камер до систем видеонаблюдения</p>
            <NavLink to='/cameras' className={styles.btn}>Подробнее</NavLink>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>СКУД</h2>
            <p className={styles.copy}>Картридеры, триподы, шлагбаумы, автоматические ворота </p>
            <NavLink to='/security' className={styles.btn}>Подробнее</NavLink>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Цифровые сети</h2>
            <p className={styles.copy}>Компьютерные сети, ВОЛС, организация серверных</p>
            <NavLink to='/network' className={styles.btn}>Подробнее</NavLink>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Умный дом</h2>
            <p className={styles.copy}>Бытовая автоматизация. Кабельное и спутниковое ТВ.</p>
            <NavLink to='/smarthome' className={styles.btn}>Подробнее</NavLink>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Электромонтаж</h2>
            <p className={styles.copy}>Проводка, заземление, электрощиты, автоматика, АИИС КУЭ.</p>
            <NavLink to='/install' className={styles.btn}>Подробнее</NavLink>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>GSM-системы</h2>
            <p className={styles.copy}>Усилители сигнала, GSM/WiFi комплекты, сигнализации.</p>
            <NavLink to='/gsm' className={styles.btn}>Подробнее</NavLink>
          </div>
        </div>
      </section>
      <h3 className={styles.subTitle}>Работаем по Владимиру и Владимирской области</h3>
    </div>
  );
}

export default Servises;
