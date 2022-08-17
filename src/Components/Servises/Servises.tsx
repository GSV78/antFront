import React from 'react';
import styles from './Servises.module.css';

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
            <button className={styles.btn}>Подробнее</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Видеонаблюдение</h2>
            <p className={styles.copy}>От одиночных ip-камер до систем видеонаблюдения</p>
            <button className={styles.btn}>Подробнее</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>СКУД</h2>
            <p className={styles.copy}>Картридеры, триподы, шлагбаумы, автоматические ворота </p>
            <button className={styles.btn}>Подробнее</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Цифровые сети</h2>
            <p className={styles.copy}>Компьютерные сети, ВОЛС, организация серверных</p>
            <button className={styles.btn}>Подробнее</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Умный дом</h2>
            <p className={styles.copy}>Бытовая автоматизация. Кабельное и спутниковое ТВ.</p>
            <button className={styles.btn}>Подробнее</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Электромонтаж</h2>
            <p className={styles.copy}>Проводка, заземление, электрощиты, автоматика, АИИС КУЭ.</p>
            <button className={styles.btn}>Подробнее</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>GSM-системы</h2>
            <p className={styles.copy}>Усилители сигнала, GSM/WiFi комплекты, сигнализации.</p>
            <button className={styles.btn}>Подробнее</button>
          </div>
        </div>
      </section>
      <h3 className={styles.subTitle}>Работаем по Владимиру и Владимирской области</h3>
    </div>
  );
}

export default Servises;
