import React, { useEffect } from 'react';
import styles from '../item.module.css';
import image from '../../images/security-cameras-white-modern-building-technology-concept.jpg';

function Cameras() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <img alt="cameras" className={styles.pic} src={image}></img>
      <div>
        <h2 className={styles.title}>Видеонаблюдение</h2>
        <p className={styles.text}>
        Когда дело доходит до выбора и монтажа системы видеонаблюдения, есть несколько важных нюансов, которые нужно учитывать. Pассмотрим подробнее некоторые из них.
        </p>
        <p className={styles.text}>
        Первым шагом при выборе системы видеонаблюдения является определение того, какие области нуждаются в наблюдении. Это может быть внутреннее или внешнее пространство, а также конкретные зоны, такие как входные двери или парковочные места. Кроме того, необходимо учитывать освещение и возможность возникновения помех, таких как дождь или снег.
        </p>
        <p className={styles.text}>
        Следующим шагом является выбор типа камеры. Существует множество различных типов камер, включая фиксированные, поворотные и наклонные камеры. Фиксированные камеры нацелены на одну область и не могут поворачиваться или наклоняться. Поворотные камеры могут поворачиваться на 360 градусов, а наклонные камеры могут наклоняться вверх и вниз. Выбор зависит от конкретных потребностей и бюджета.
        </p>
        <p className={styles.text}>
        Также необходимо учитывать разрешение камеры. Чем выше разрешение, тем более детальным будет изображение. Однако, более высокое разрешение также означает более высокую стоимость.
        </p>
        <p className={styles.text}>
        При монтаже системы видеонаблюдения необходимо учитывать место установки камер. Камеры должны быть установлены в местах, где они могут наблюдать за нужными областями, но при этом не могут быть легко повреждены или украдены. Кроме того, необходимо убедиться, что камеры установлены на достаточной высоте, чтобы избежать возможности повреждения или вандализма.
        </p>
        <p className={styles.text}>
        В заключение, выбор и монтаж системы видеонаблюдения является важным шагом для обеспечения безопасности и защиты имущества. Учитывая вышеупомянутые нюансы, вы сможете выбрать наиболее подходящую Вам систему видеонаблюдения.
        </p>
      </div>
    </div>
  );
}

export default Cameras;