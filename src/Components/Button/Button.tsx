import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

function Button() {
  const navigate = useNavigate();
  // const [menu, setMenu] = useState<Boolean>(false);
  return (
    <div className={`${styles.item} ${styles.button_pulse}`}>
      <div className={styles.button__wrapper}>
        <div className={styles.pulsing}></div>
        <button onClick={() => navigate('/message')} className={styles.button}>
          Заказать звонок
        </button>
      </div>
      {/* <div className={menu ? styles.visible : styles.unvisible}>ФОРМА</div> */}
    </div>
  );
}

export default Button;
