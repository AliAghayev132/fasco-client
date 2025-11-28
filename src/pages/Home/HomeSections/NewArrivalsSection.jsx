import React, { useState } from 'react'
import styles from "../HomePage.module.css";
import { Card } from './Cards/Card';

export const NewArrivalsSection = () => {

  const [products, setProducts] = useState([
    { id: 1, title: "Shiny Dress", price: 95.50 },
    { id: 2, title: "Red Jacket", price: 120.00 },
    { id: 3, title: "Blue Skirt", price: 75.10 },
    { id: 4, title: "Brown Bag", price: 59.90 },
    { id: 5, title: "Black Shoes", price: 140.00 },
    { id: 6, title: "White Top", price: 45.00 }
  ]);

  return (
    <div className={`${styles.container} ${styles.arrials__section}`}>
      <div className={styles.title}>
        <h2>New Arrivals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque duis ultrices sollicitudin aliquam sem.
        </p>
      </div>

      <div className={styles.cards__category}>
        <button>Men’s Fashion</button>
        <button className={styles.active}>Women’s Fashion</button>
        <button>Women Accessories</button>
        <button>Men Accessories</button>
        <button>Discount Deals</button>
      </div>

      <div className={styles.cards}>
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.viewMoreWrapper}>
        <button className={styles.viewMoreBtn}>View More</button>
      </div>
    </div>
  );
};
