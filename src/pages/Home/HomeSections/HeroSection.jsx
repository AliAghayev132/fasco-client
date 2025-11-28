// React
import React from 'react'

//Styles
import styles from "../HomePage.module.css";

// Images
import CK from '@/assets/images/ck.png';
import LV from '@/assets/images/lv.png';
import img1 from '@/assets/images/img1.png';
import img2 from '@/assets/images/img2.png';
import img3 from '@/assets/images/img3.png';
import img4 from '@/assets/images/img4.jpg';
import prada from '@/assets/images/prada.png';
import denim from '@/assets/images/denim.png';
import chanel from '@/assets/images/chanel.png';

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
