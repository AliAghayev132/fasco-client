import React from 'react'
import styles from "../HomePage.module.css";
import img1 from '../HomePageImg/img1.png';
import img2 from '../HomePageImg/img2.png';
import img3 from '../HomePageImg/img3.png';
import img4 from '../HomePageImg/img4.jpg';
import CK from '../HomePageImg/CK.png';
import LV from '../HomePageImg/LV.png';
import prada from '../HomePageImg/prada.png';
import denim from '../HomePageImg/denim.png';
import chanel from '../HomePageImg/chanel.png';

export const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero__section}>
        <div>
          <img src={img1} alt="Img" />
        </div>
        <div className={styles.title}>
          <img src={img3} alt="Img" />
          <h2>ULTIMATE</h2>
          <h1>SALE</h1>
          <h3>NEW COLLECTION</h3>
          <button className={styles.btn}>SHOP NOW</button>
          <img src={img4} alt="Img" />
        </div>
        <div>
          <img src={img2} alt="Img" />
        </div>
      </div>
      <div className={styles.categories}>
        <img src={chanel} alt="Chanel" />
        <img src={CK} alt="CK" />
        <img src={prada} alt="Prada" />
        <img src={denim} alt="Denim" />
        <img src={LV} alt="LV" />
      </div>
    </div>
  )
}
