import "./Footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-about">

          <div className="footer-logo">
            {/* <img src={logo} alt="GameHub" /> */}
            <h2>GAMEHUB</h2>
          </div>

          <p>
            Your ultimate destination for premium gaming gear and accessories.
            Level up your game with the best products at unbeatable prices.
          </p>

          <div className="footer-social">

            <a>
              <FaFacebookF />
            </a>

            <a >
              <FaTwitter />
            </a>

            <a >
              <FaInstagram />
            </a>

            <a>
              <FaYoutube />
            </a>

            <a>
              <FaDiscord />
            </a>

          </div>

        </div>

        {/* Shop */}

        <div className="footer-links">

          <h3>SHOP</h3>


          <li>All Products</li>
          <li>Gaming PCs</li>
          <li>Laptops</li>
          <li>Accessories</li>
          <li>New Arrivals</li>

        

        </div>

        {/* Company */}

        <div className="footer-links">

          <h3>COMPANY</h3>


          <li>About Us</li>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Affiliates</li>


        </div>

        {/* Help */}

        <div className="footer-links">

          <h3>HELP & SUPPORT</h3>


          <li>FAQs</li>
          <li>Shipping & Delivery</li>
          <li>Returns & Refunds</li>
          <li>Warranty</li>
          <li>Track Order</li>


        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>CONTACT US</h3>

          <div className="contact-item">
            <FaEnvelope />
            <span>support@gamehub.com</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>
              123 Gaming Street,
              <br />
              New Delhi, India
            </span>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} GameHub. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;