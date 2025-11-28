import React from 'react'
import styles from "../../HomePage.module.css";
import cardImg1 from '@/assets/images/cardImg1.jpg';

export const Card = ({ product }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageBox}>
                <div className={styles.inner}>
                    <img src={cardImg1} alt={product.title} />
                </div>
            </div>

            <div className={styles.card__body}>
                <div className={styles.titleRow}>
                    <div>
                        <h3 className={styles.productTitle}>{product.title}</h3>
                        <p className={styles.sub}>Al Karum</p>
                    </div>

                    <div className={styles.stars}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i}>⭐</span>
                        ))}
                    </div>
                </div>

                <p className={styles.reviews}>(4.1k) Customer Reviews</p>

                <div className={styles.footer}>
                    <span className={styles.price}>${product.price}</span>
                    <span className={styles.sold}>Almost Sold Out</span>
                </div>
            </div>
        </div>
    );
};
