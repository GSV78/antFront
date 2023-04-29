import React, { useEffect } from 'react';
import styles from '../item.module.css';
import image from '../../images/wepik-photo-mode-202274-204916.png';

function Security() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <img alt="security" className={styles.pic} src={image}></img>
      <div>
        <h2 className={styles.title}>СКУД</h2>
        <p className={styles.text}>
        Системы контроля и учета доступа являются важной частью безопасности любой организации. Правильный выбор и монтаж такой системы является критически важным процессом, который может повлиять на безопасность организации.
        </p>
        <p className={styles.text}>
        Первый нюанс, на который следует обратить внимание, - это надежность системы. Необходимо выбирать системы от проверенных производителей, которые имеют хорошую репутацию на рынке.
        </p>
        <p className={styles.text}>
        Второй нюанс - это соответствие системы требованиям организации. Необходимо понимать, какие объекты нуждаются в контроле доступа и какие уровни доступа необходимы.
        </p>
        <p className={styles.text}>
        Третий нюанс - это интеграция системы в уже существующую инфраструктуру организации. Необходимо убедиться, что система может быть легко интегрирована с уже существующими системами безопасности. 
        </p>
        <p className={styles.text}>
        Четвертый нюанс - это настройка системы. Необходимо настроить систему правильно, чтобы она работала наиболее эффективно и соответствовала требованиям организации.
        </p>
        <p className={styles.text}>
        Пятый нюанс - это обучение пользователей. Необходимо обучить пользователей правильному использованию системы контроля и учета доступа.
        </p>
        <p className={styles.text}>
        Монтаж системы контроля и учета доступа также требует внимания к деталям. Необходимо убедиться в правильности установки оборудования и правильности подключения к существующей инфраструктуре.
        </p>
        <p className={styles.text}>
        Таким образом, выбор и монтаж системы контроля и учета доступа являются важными процессами, которые требуют внимания к деталям. Надежность системы, соответствие требованиям организации, интеграция с уже существующей инфраструктурой, настройка системы и обучение пользователей - все эти нюансы важны для обеспечения безопасности организации.
        </p>
      </div>
    </div>
  );
}

export default Security;
