// Styles
import styles from "./Footer.module.css";

// Images
import Boy from "@/assets/images/footer.boy.png";
import Girl from "@/assets/images/footer.girl.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__hero"]}>
        <img
          src={Boy}
          alt="boy"
          className={`${styles["footer__hero-img"]} ${styles["footer__hero-img--left"]}`}
        />

        <div className={styles["footer__hero-content"]}>
          <h2>Subscribe To Our Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>

          <div className={styles["footer__input-box"]}>
            <input type="email" placeholder="michael@ymail.com" />
          </div>

          <button className={styles["footer__btn"]}>Subscribe Now</button>
        </div>

        <img
          src={Girl}
          alt="girl"
          className={`${styles["footer__hero-img"]} ${styles["footer__hero-img--right"]}`}
        />
      </div>

      <div className={styles["footer__bottom"]}>
        <span className={styles["footer__logo"]}>FASCO</span>

        <ul className={styles["footer__links"]}>
          <li>Support Center</li>
          <li>Invoicing</li>
          <li>Contract</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>FAQs</li>
        </ul>
      </div>
    </footer>
  );
};
