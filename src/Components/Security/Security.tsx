import React from 'react'
import styles from './item.module.css'
import image from '../../images/wepik-photo-mode-202274-204916.png'

function Security() {
  return (
    <div className={styles.container}> 
      <img
        alt="team"
        className={styles.pic}
        src={image}></img>
      <div>
        <h2 className={styles.title}>СКУД</h2>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus repellat totam deleniti reprehenderit dolorem. A, libero dignissimos! Fugit, nostrum ab? Ullam ipsa obcaecati dolores quos culpa! Voluptatum eius illum magnam id beatae unde placeat praesentium ducimus dolorum explicabo cupiditate tenetur facilis tempore vero, nobis sunt fugit voluptate? Quae, dicta.
        </p>
      </div>
    </div>
  )
}

export default Security