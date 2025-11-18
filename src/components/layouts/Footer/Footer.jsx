import "./Footer.css";
import Boy from "./images/footer.boy.png";
import Girl from "./images/footer.girl.png";


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__top">
        <div className="footer__image footer__image--left">
          <img src={Boy} alt="boy" />
        </div>

        <div className="footer__content">
          <h2 className="footer__title">Subscribe to our newsletter</h2>
          <p className="footer__subtitle">
            Get weekly updates about new products & discounts
          </p>

          <div className="footer__input-group">
            <input
              type="email"
              className="footer__input"
              placeholder="Enter your email"
            />
            <button className="footer__button">Subscribe</button>
          </div>
        </div>

        <div className="footer__image footer__image--right">
          <img src={Girl} alt="girl" />
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__columns">

          <div className="footer__column">
            <h3 className="footer__heading">Company</h3>
            <ul className="footer__list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Support</h3>
            <ul className="footer__list">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping Info</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Products</h3>
            <ul className="footer__list">
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Contact</h3>
            <ul className="footer__list">
              <li>Email: info@fasco.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Location: Los Angeles</li>
            </ul>
          </div>

        </div>

    

      </div>

    </footer>
  );
};

export default Footer;
