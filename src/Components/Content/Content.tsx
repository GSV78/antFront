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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquid
            reprehenderit quis enim esse dolorum, ipsum accusantium dolor praesentium dignissimos
            cupiditate mollitia iure facilis nam quod ab velit. A, illum. Obcaecati doloribus eum
            maiores quis eos nesciunt enim error velit. Veritatis, blanditiis placeat! Aspernatur
            illo ducimus est, officia officiis aliquam eos ex earum nisi consequatur nesciunt quas
            odit repellat in tenetur magni! Consequatur saepe odit, voluptatum minus, temporibus
            laudantium, ex cupiditate fugiat exercitationem quam eveniet blanditiis! Obcaecati quas,
            cupiditate neque commodi voluptatum culpa sit repudiandae aut tenetur distinctio
            pariatur ex quos sed placeat numquam expedita! Debitis nisi aut magni iusto quo quos
            sapiente praesentium, voluptatem tempore excepturi minus! Ipsum beatae voluptate
            consectetur nihil ea minus veritatis blanditiis eius aspernatur quasi laborum,
            accusantium nobis. Rem quidem praesentium beatae rerum inventore quod adipisci porro
            tempora eaque nostrum! Nihil totam beatae laboriosam exercitationem.
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
