// Icons
import {
  StarIcon,
  SearchIcon,
  BasketIcon,
  ProfileIcon,
} from "@/components/icons";

// Styles
import styles from "./Header.module.css";

// React Router
import { Link, useLocation } from "react-router";

export const Header = () => {
  const location = useLocation();

  const handleNavbarClass = (path) => {
    const isActive = location.pathname === path;
    return `${styles["navbar__link"]} ${isActive ? styles["navbar__link--active"] : ""}`;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
       <div className={styles["navbar__logo"]}>
  <Link to="/" className={styles["logo__link"]}>FASCO</Link>
</div>

        <ul className={styles["navbar__menu"]}>
          <li className={styles["navbar__item"]}>
            <Link to="/" className={handleNavbarClass("/")}>Home</Link>
          </li>

          <li className={styles["navbar__item"]}>
            <Link to="/shop" className={handleNavbarClass("/shop")}>Shop</Link>
          </li>
        </ul>

        <div className={styles.actions}>
          <SearchIcon />
          <ProfileIcon />
          <StarIcon />
          <Link to="/cart">
            <BasketIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
};
