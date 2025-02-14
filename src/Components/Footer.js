import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us */}
        <div className="footer-section about">
          <h4>About Us</h4>
          <p>
            At SriLaxmiBhagavan, we provide customers with exquisite, high-quality
            jewelry and exceptional service. Explore our timeless collections
            crafted to add elegance to every moment.
          </p>
        </div>

        {/* Shop Now */}
        <div className="footer-section shop">
          <h4>Shop Now</h4>
          <ul>
            <li>
              <Link to="/necklace" onClick={scrollToTop}>
                Necklace
              </Link>
            </li>
            <li>
              <Link to="/chains" onClick={scrollToTop}>
                Chains
              </Link>
            </li>
       
            <li>
              <Link to="/earrings-rings" onClick={scrollToTop}>
                Ear Rings
              </Link>
            </li>
            <li>
              <Link to="/bangles" onClick={scrollToTop}>
                Bangles
              </Link>
            </li>
            {/* <li>
              <Link to="/earrings-rings" onClick={scrollToTop}>
                Rings
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section support">
          <h4>Address</h4>
     <p>Opp Girls High School,</p>
        </div>

        {/* Reach Us */}
        <div className="footer-section reach">
          <h4>Reach Us</h4>
          <p><a href="tel:+918179091444">81790 91444</a></p>
          <p>
            <a href="mailto:nallapuswapna4@gmail.com">nallapuswapna4@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
