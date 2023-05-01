import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate()

  const home = () => {
    navigate('/');
  };
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={`${styles.inner_header}  ${styles.flex}`}>
            <div className={styles.leftSection}>
              <svg
                version="1.0"
                className={styles.logo}
                xmlns="http://www.w3.org/2000/svg"
                width="56.000000pt"
                height="47.000000pt"
                viewBox="0 0 860.000000 771.000000"
                preserveAspectRatio="xMidYMid meet">
                <g
                  transform="translate(0.000000,771.000000) scale(0.100000,-0.100000)"
                  fill="#ffffff"
                  stroke="none">
                  <path
                    d="M5985 7292 c-42 -20 -95 -73 -120 -122 -8 -16 -55 -123 -104 -237
-197 -462 -402 -908 -431 -937 -40 -40 -110 -45 -266 -17 -229 40 -405 54
-684 54 -288 0 -458 -14 -711 -59 -276 -49 -270 -48 -310 -31 -51 21 -76 59
-159 242 -40 88 -127 282 -195 430 -67 149 -150 334 -185 412 -88 202 -147
263 -252 263 -61 0 -116 -31 -217 -123 -109 -100 -1112 -1153 -1566 -1645
-234 -254 -276 -314 -410 -582 -73 -146 -89 -213 -65 -284 17 -53 48 -69 134
-69 88 0 101 6 258 120 228 167 303 249 764 843 266 343 865 1124 969 1265
l87 117 75 -133 c390 -691 520 -929 509 -937 -6 -5 -79 -44 -162 -86 -180 -90
-268 -146 -390 -248 -285 -237 -483 -568 -590 -987 -157 -609 -124 -1368 87
-2018 212 -651 599 -1186 1159 -1600 306 -227 610 -343 939 -360 l116 -6 -145
107 c-80 58 -145 110 -145 115 0 6 51 68 113 140 61 71 112 134 112 138 0 5
-45 58 -100 118 l-100 108 23 26 c13 14 58 65 100 112 l78 87 -33 20 c-18 10
-132 72 -253 137 -121 65 -221 119 -222 120 -1 0 0 11 4 23 l5 22 638 0 c638
0 639 0 645 -21 4 -11 5 -22 3 -23 -1 -2 -117 -65 -256 -141 l-252 -137 39
-46 c21 -26 49 -56 61 -67 12 -11 40 -41 61 -67 l39 -46 -77 -84 c-42 -45 -90
-97 -107 -115 l-29 -32 107 -116 108 -115 -142 -151 c-78 -83 -140 -152 -138
-154 2 -2 46 3 98 10 426 60 809 226 1140 493 243 198 500 498 692 812 263
429 414 861 485 1385 25 185 25 720 0 920 -34 273 -68 429 -132 614 -136 389
-368 689 -705 911 -84 55 -160 94 -387 202 -35 16 -63 34 -63 40 0 10 147 281
462 856 49 89 93 162 96 162 13 0 89 -96 282 -359 627 -849 868 -1161 1056
-1362 192 -205 546 -532 603 -556 33 -14 250 -47 258 -39 2 2 5 66 6 142 l2
139 -54 100 c-125 233 -228 377 -411 574 -304 328 -1252 1313 -1585 1646 -95
96 -180 124 -260 87z m-2959 -2331 c149 -70 232 -206 304 -501 l33 -134 -16
-141 c-21 -183 -64 -351 -121 -471 -115 -242 -295 -405 -482 -436 -175 -29
-350 82 -449 287 -94 196 -117 431 -65 695 101 525 473 852 796 701z m2904 29
c131 -25 283 -142 388 -299 100 -149 154 -307 192 -561 28 -190 27 -208 -25
-356 -64 -183 -146 -343 -203 -401 -84 -84 -198 -118 -315 -93 -347 72 -620
558 -594 1059 11 220 76 395 190 518 67 71 123 107 199 127 65 18 99 19 168 6z"
                  />
                </g>
              </svg>
              <h1 className={styles.title} onClick={home}>Инженер33.рф</h1>
            </div>
            <div className={styles.rigthSection}>
              <div>
                <div className={styles.phone}>+7 (960) 777-77-77</div>
                <div className={styles.subPhone}>Viber, Telegram, WhatsApp</div>
              </div>
              <Button />
            </div>
          </div>
          <h2 className={styles.subTitle}>
            Монтаж и наладка кондиционеров, СКУД, видеонаблюдения, компьютерных сетей, умный дом,
            электромонтаж. Сдача "под ключ". Сервисное обслуживание.
          </h2>
        </div>
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
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
