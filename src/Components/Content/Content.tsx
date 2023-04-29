import styles from './Content.module.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Conditioners from '../Conditioners/Conditioners';
import Cameras from '../Cameras/Cameras';
import Security from '../Security/Security';
import Network from '../Network/Network';
import Install from '../Install/Install';
import Smarthome from '../Smarthome/Smarthome';
import Gsm from '../Gsm/Gsm';

function Content() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.container}>
      <div data-aos="fade-up" className={styles.box}>
        <img
          alt="team"
          className={styles.pic}
          src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=1380&t=st=1660414587~exp=1660415187~hmac=2656d8552e60011eed267267225331dd653101e11cb12f5f5fb35ce7870c15f6"></img>
        <div>
          <h2 className={styles.title}>Немного о нас</h2>
          <p className={styles.text}>
              Наша компания занимается электромонтажными работами уже более 20 лет, и мы гордимся своим опытом и профессионализмом. 
          </p>
          <p className={styles.text}>
              Мы используем только самый современный и профессиональный инструмент, чтобы гарантировать высокое качество наших услуг.
          </p>
          <p className={styles.text}>
              Наши мастера - опытные профессионалы, которые знают все тонкости своего дела и готовы выполнить любую задачу, связанную с электромонтажом.
          </p>
          <p className={styles.text}>
              Обращайтесь к нам, и мы с радостью поможем вам решить любые проблемы, связанные с электромонтажом!
          </p>
        </div>
      </div>
      {/* <h3>Мы предлагаем услуги по монтажу и наладке:</h3> */}
      <div data-aos="fade-up" className={styles.box}>
        <Conditioners />
      </div>{' '}
      <div data-aos="fade-up" className={styles.box}>
        <Cameras />
      </div>{' '}
      <div data-aos="fade-up" className={styles.box}>
        <Security />
      </div>{' '}
      <div data-aos="fade-up" className={styles.box}>
        <Network />
      </div>{' '}
      <div data-aos="fade-up" className={styles.box}>
        <Smarthome />
      </div>{' '}
      <div data-aos="fade-up" className={styles.box}>
        <Install />
      </div>{' '}
      <div data-aos="fade-up" className={styles.box}>
        <Gsm />
      </div>
    </div>
  );
}

export default Content;
