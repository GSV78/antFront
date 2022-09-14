import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div>
      <svg
        className={styles.waves}
        xmlns="http://www.w3.org/2000/svg"
        x="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto">
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className={styles.parallax}>
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(84, 58, 183,0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(84, 58, 183,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(84, 58, 183,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(84, 58, 183,1)" />
        </g>
      </svg>
      <div className={styles.footer}>+7(960)777-77-77 Мы всегда на связи!</div>
    </div>
  );
}

export default Footer;
