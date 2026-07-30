import "../Components/Nav.css"
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

export default function Nav() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <IoGameController className="logo-icon" />
        <h2>
          GAME<span>HUB</span>
        </h2>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li className="active">Home</li>
        <li>Shop</li>
        <li>Categories</li>
        <li>Deals</li>
        <li>Contact</li>
      </ul>

      {/* Search */}
      <div className="search-box">
        <input type="text" placeholder="Search for products..." />
        <FaSearch />
      </div>

      {/* Icons */}
      <div className="icons">
        <FaHeart />
        <div className="cart">
          <FaShoppingCart />
          
        </div>
        <FaUser />
      </div>

    </nav>
  );
}