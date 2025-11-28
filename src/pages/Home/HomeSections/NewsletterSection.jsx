import React from 'react'
import styles from "../HomePage.module.css";
import newsletterimg1 from '@/assets/images/newsletterimg1.png';
import newsletterimg2 from '@/assets/images/newsletterimg2.png';

export const NewsletterSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.newsLetter}>
        <img src={newsletterimg1} alt="NewsletterImg1" />
        <div className={styles.title}>
          <h2>Subscribe To Our Newsletter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
          <p>michael@ymail.com</p>
          <div className={styles.btnBg}>
            <button className={styles.btn}>Subscribe Now</button>
          </div>
        </div>
        <img src={newsletterimg2} alt="NewsletterImg2" />
      </div>
    </div>
  )
}
