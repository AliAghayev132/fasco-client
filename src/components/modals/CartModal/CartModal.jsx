import { useState } from "react";
import styles from "./CartModal.module.css";

export default function CartModal({ onClose }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});

  // Card number input
  const handleCardInput = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // yalnız rəqəm
    setCardNumber(value.slice(0, 16));
  };

  // Exp date input MM/YY
  const handleExpInput = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2, 4);
    setExpDate(value);
  };

  // CVV input
  const handleCvvInput = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setCvv(value.slice(0, 3));
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (cardNumber.length !== 16) newErrors.cardNumber = "Card number incomplete";
    if (!/^\d{2}\/\d{2}$/.test(expDate)) newErrors.expDate = "Exp Date must be MM/YY";
    if (cvv.length !== 3) newErrors.cvv = "CVV must be 3 digits";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onClose(); // bütün inputlar doğru olarsa modal bağlansın
    }
  };

  return (
    <div className={styles.modal__bg} onClick={onClose}>
      <div className={styles.modal__box} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close__btn} onClick={onClose}>×</button>

        <h2>Payment Details</h2>

        <label className={styles.label}>Card Number</label>
        <input
          className={styles.input}
          type="text"
          placeholder="XXXX XXXX XXXX XXXX"
          value={cardNumber.replace(/(.{4})/g, "$1 ").trim()}
          onChange={handleCardInput}
        />
        {errors.cardNumber && <p className={styles.error}>{errors.cardNumber}</p>}

        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>Exp Date</label>
            <input
              className={styles.input}
              type="text"
              placeholder="MM/YY"
              value={expDate}
              onChange={handleExpInput}
              maxLength="5"
            />
            {errors.expDate && <p className={styles.error}>{errors.expDate}</p>}
          </div>

          <div className={styles.col}>
            <label className={styles.label}>Security Code</label>
            <input
              className={styles.input}
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={handleCvvInput}
              maxLength="3"
            />
            {errors.cvv && <p className={styles.error}>{errors.cvv}</p>}
          </div>
        </div>

        <button className={styles.pay__btn} onClick={handleSubmit}>
          Pay Now
        </button>
      </div>
    </div>
  );
}
