import React from 'react';
import styles from './Button.module.css';

function Button() {
  return (
    <div className={`${styles.item} ${styles.button_pulse}`}>
      <div className={styles.button__wrapper}>
        <div className={styles.pulsing}></div>
        <button className={styles.button}>Заказать звонок</button>
      </div>
    </div>
  );
}

export default Button;
