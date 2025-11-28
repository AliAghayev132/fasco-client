import React from 'react'
import styles from "../HomePage.module.css";
import instaimg1 from '../HomePageImg/instaimg1.jpg';
import instaimg2 from '../HomePageImg/instaimg2.jpg';
import instaimg3 from '../HomePageImg/instaimg3.jpg';
import instaimg4 from '../HomePageImg/instaimg4.jpg';
import instaimg5 from '../HomePageImg/instaimg5.jpg';
import instaimg6 from '../HomePageImg/instaimg6.jpg';
import instaimg7 from '../HomePageImg/instaimg7.jpg';


export const InstagramSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.instagram}>
        <div className={styles.title}>
          <h2>Follow Us On Instagram</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
        </div>
        <div className={styles.instaImgs}>
          <img src={instaimg1} alt="instaImg1" />
          <img src={instaimg2} alt="instaImg2" />
          <img src={instaimg3} alt="instaImg3" />
          <img src={instaimg4} alt="instaImg4" />
          <img src={instaimg5} alt="instaImg5" />
          {/* <img src={instaimg6} alt="instaImg6" /> */}
          <img src={instaimg7} alt="instaImg7" />
        </div>
      </div>
    </div>
  )
}
