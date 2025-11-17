import {
  SearchIcon,
  ProfileIcon,
  StarIcon,
  BasketIcon,
} from "@/components/icons";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav ClassName="nav">
        <div className="logo">FASCO</div>
        <div className="nav-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
          </ul>
        </div>
        <div className="actions">
          <a href=""><SearchIcon /></a>
          <ProfileIcon />
          <StarIcon />
          <BasketIcon />
        </div>
      </nav>
    </header>
  );
};
