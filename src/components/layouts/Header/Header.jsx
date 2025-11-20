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
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(false);

  const handleNavbarClass = (path) => {
    const isActive = location.pathname === path;
    return `${styles["navbar__link"]} ${isActive ? styles["navbar__link--active"] : ""}`;
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles["navbar__logo"]}>
          <Link to="/" className={styles["logo__link"]}>FASCO</Link>
        </div>

        {/* Burger icon */}
        <div className={styles.burger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Menu */}
        <ul className={`${styles["navbar__menu"]} ${menuActive ? styles.active : ""}`}>
          <li className={styles["navbar__item"]}>
            <Link to="/" className={handleNavbarClass("/")}>Home</Link>
          </li>
          <li className={styles["navbar__item"]}>
            <Link to="/shop" className={handleNavbarClass("/shop")}>Shop</Link>
          </li>
        </ul>

        {/* Action Icons */}
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
