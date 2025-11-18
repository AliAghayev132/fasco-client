import {
  SearchIcon,
  ProfileIcon,
  StarIcon,
  BasketIcon,
} from "@/components/icons";
import "./Header.css";

export const Header = () => {
  return (
    <header> 
      <nav className="navbar">
        <div className="navbar__logo">FASCO</div>

        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#" className="navbar__link">Home</a>
          </li>

          <li className="navbar__item">
            <a href="#" className="navbar__link">Shop</a>
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
          <BasketIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
