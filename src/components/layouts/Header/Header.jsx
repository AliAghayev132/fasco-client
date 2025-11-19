// Icons
import {
  StarIcon,
  SearchIcon,
  BasketIcon,
  ProfileIcon,
} from "@/components/icons";
// Styles

// TODO: Modularyar Css keçirələcək

import "./Header.css";


// React Router
import { Link, useLocation } from "react-router";


export const Header = () => {
  const location = useLocation();

  const handleNavbarClass = path => `navbar__link ${location.pathname == path && "active"}`;


  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">FASCO</div>

        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className={handleNavbarClass("/")}>Home</Link>
          </li>

          <li className="navbar__item">
            <Link to="/shop" className={handleNavbarClass("/shop")}>Shop</Link>
          </li>

          <li className="navbar__item">
            <a href="#" className="navbar__link">Products</a>
            <span className="navbar__link"></span>
          </li>

          <li className="navbar__item navbar__item--dropdown">
            <a href="#" className="navbar__link">Pages</a>
            <span className="navbar__arrow">▾</span>
          </li>
        </ul>

        <div className="actions">
          <SearchIcon />
          <ProfileIcon />
          <StarIcon />
          <Link to="cart">
            <BasketIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
};
