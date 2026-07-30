import "../Components/Hero.css";
import {
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

import gaming from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="welcome">
          🎮 WELCOME TO GAMEHUB
        </span>

        <h1>
          LEVEL UP <br />
          <span>YOUR GAMING</span>
        </h1>

        <p>
          Discover the best gaming gear, high-performance PCs,
          keyboards, headsets and accessories to dominate
          every match.
        </p>

        <div className="buttons">
          <button className="shop">
            Shop Now <FaArrowRight />
          </button>

          <button className="explore">
            Explore
          </button>
        </div>

        <div className="features">

          <div className="feature">
            <FaTruck />
            <div>
              <h4>Free Shipping</h4>
              <p>Orders over $99</p>
            </div>
          </div>

          <div className="feature">
            <FaShieldAlt />
            <div>
              <h4>1 Year Warranty</h4>
              <p>All Products</p>
            </div>
          </div>

          <div className="feature">
            <FaHeadset />
            <div>
              <h4>24/7 Support</h4>
              <p>We're here to help</p>
            </div>
          </div>

        </div>

      </div>

      <div className="hero-right">
        <img src={gaming} alt="Gaming Setup" />
      </div>

    </section>
  );
}