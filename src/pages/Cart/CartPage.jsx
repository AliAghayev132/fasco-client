import React, { useState } from "react";

// Images
import ProductImg from "@/assets/images/cart.girl.png";

// CSS Module
import styles from "./CartPage.module.css";

export const CartPage = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Mini Dress With Ruffled Straps",
      color: "Red",
      price: 14.9,
      qty: 1,
      img: ProductImg,
    },
  ]);

  const [wrap, setWrap] = useState(false);
  const wrapCost = 10.0;

  const increment = (id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it))
    );
  };

  const decrement = (id) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const subtotal = () => {
    const sum = items.reduce((acc, it) => acc + it.price * it.qty, 0);
    return wrap ? sum + wrapCost : sum;
  };

  const formatMoney = (n) => `$${n.toFixed(2)}`;

  const handleCheckout = () => {
    alert(`Checking out — total: ${formatMoney(subtotal())}`);
  };

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartHeader}>
        <h1>Shopping Cart</h1>
        <p className={styles.breadcrumb}>
          Home <span>›</span> Your Shopping Cart
        </p>
      </div>

      <div className={styles.cartTableHead}>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>

      <hr className={styles.hr} />

      {items.length === 0 && (
        <p className={styles.emptyCart}>Your cart is empty.</p>
      )}

      {items.map((item) => (
        <div className={styles.cartItem} key={item.id}>
          <div className={styles.cartProduct}>
            <img src={item.img} alt={item.title} />
            <div className={styles.cartProductInfo}>
              <h3>{item.title}</h3>
              <p className={styles.color}>Color : {item.color}</p>
              <button
                className={styles.removeBtn}
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>

          <div className={styles.cartPrice}>{formatMoney(item.price)}</div>

          <div className={styles.cartQty}>
            <button onClick={() => decrement(item.id)} aria-label="Decrease">
              -
            </button>
            <span>{String(item.qty).padStart(2, "0")}</span>
            <button onClick={() => increment(item.id)} aria-label="Increase">
              +
            </button>
          </div>

          <div className={styles.cartTotal}>
            {formatMoney(item.price * item.qty)}
          </div>
        </div>
      ))}

      <hr className={styles.divider} />

      <div className={styles.wrapOption}>
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            type="checkbox"
            checked={wrap}
            onChange={() => setWrap((v) => !v)}
          />
          <span>
            For <strong>{formatMoney(wrapCost)}</strong> Please Wrap The Product
          </span>
        </label>
      </div>

      <hr className={styles.divider} />

      <div className={styles.subtotalBox}>
        <p>Subtotal</p>
        <h3>{formatMoney(subtotal())}</h3>
      </div>

      <button className={styles.checkoutBtn} onClick={handleCheckout}>
        Checkout
      </button>

      <p className={styles.viewCart}>View Cart</p>
    </div>
  );
};
