import React, { useState } from "react";
import "./CartPage.css";
import productImg from "./images/cart.girl.png";

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Mini Dress With Ruffled Straps",
      color: "Red",
      price: 14.9,
      qty: 1,
      img: productImg,
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
    // Placeholder for checkout flow
    alert(`Checking out — total: ${formatMoney(subtotal())}`);
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p className="breadcrumb">
          Home <span>›</span> Your Shopping Cart
        </p>
      </div>

      <div className="cart-table-head">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>

      <hr />

      {items.length === 0 && (
        <p className="empty-cart">Your cart is empty.</p>
      )}

      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="cart-product">
            <img src={item.img} alt={item.title} />
            <div className="cart-product-info">
              <h3>{item.title}</h3>
              <p className="color">Color : {item.color}</p>
              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
                aria-label={`Remove ${item.title}`}
              >
                Remove
              </button>
            </div>
          </div>

          <div className="cart-price">{formatMoney(item.price)}</div>

          <div className="cart-qty">
            <button onClick={() => decrement(item.id)} aria-label="Decrease">
              -
            </button>
            <span>{String(item.qty).padStart(2, "0")}</span>
            <button onClick={() => increment(item.id)} aria-label="Increase">
              +
            </button>
          </div>

          <div className="cart-total">{formatMoney(item.price * item.qty)}</div>
        </div>
      ))}

      <hr className="divider" />

      <div className="wrap-option">
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            type="checkbox"
            checked={wrap}
            onChange={() => setWrap((v) => !v)}
            aria-checked={wrap}
          />
          <span>
            For <strong>{formatMoney(wrapCost)}</strong> Please Wrap The Product
          </span>
        </label>
      </div>

      <hr className="divider" />

      <div className="subtotal-box">
        <p>Subtotal</p>
        <h3>{formatMoney(subtotal())}</h3>
      </div>

      <button className="checkout-btn" onClick={handleCheckout}>
        Checkout
      </button>

      <p className="view-cart">View Cart</p>
    </div>
  );
}
