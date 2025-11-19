// Styles
// TODO: Modulyar Css
import "./Footer.css";

// Images
import Boy from "@/assets/images/footer.boy.png";
import Girl from "@/assets/images/footer.girl.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-hero">
        <img src={Boy} alt="boy" className="hero-img hero-img-left" />

        <div className="hero-content">
          <h2>Subscribe To Our Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>

          <div className="hero-input-box">
            <input type="email" placeholder="michael@ymail.com" />
          </div>

          <button className="hero-btn">Subscribe Now</button>
        </div>

        <img src={Girl} alt="girl" className="hero-img hero-img-right" />
      </div>

      <div className="footer-bottom">
        <span className="footer-logo">FASCO</span>

        <ul className="footer-links">
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

export default Footer;
