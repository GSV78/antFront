import React from 'react';
import styles from './Servises.module.css';

function Servises() {
  return (
    <div className={styles.body}>
      <main className={styles.page_content}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Mountain View</h2>
            <p className={styles.copy}>
              Check out all of these gorgeous mountain trips with beautiful views of, you guessed
              it, the mountains
            </p>
            <button className={styles.btn}>View Trips</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>To The Beach</h2>
            <p className={styles.copy}>
              Plan your next beach trip with these fabulous destinations
            </p>
            <button className={styles.btn}>View Trips</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Desert Destinations</h2>
            <p className={styles.copy}>It's the desert you've always dreamed of</p>
            <button className={styles.btn}>Book Now</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Explore The Galaxy</h2>
            <p className={styles.copy}>
              Seriously, straight up, just blast off into outer space today
            </p>
            <button className={styles.btn}>Book Now</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Mountain View</h2>
            <p className={styles.copy}>
              Check out all of these gorgeous mountain trips with beautiful views of, you guessed
              it, the mountains
            </p>
            <button className={styles.btn}>View Trips</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>To The Beach</h2>
            <p className={styles.copy}>
              Plan your next beach trip with these fabulous destinations
            </p>
            <button className={styles.btn}>View Trips</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Servises;
