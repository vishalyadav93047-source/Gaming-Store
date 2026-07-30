import "./Products.css";
import {
  FaStar,
  FaRegHeart,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";

// import laptop from "../assets/laptop.png";
// import gpu from "../assets/gpu.png";
// import keyboard from "../assets/keyboard.png";
// import mouse from "../assets/mouse.png";
// import headset from "../assets/headset.png";

const products = [
  {
    id: 1,
    discount: "-15%",
    // image: laptop,
    title: "ASUS ROG Strix G16 Gaming Laptop",
    rating: 4.9,
    reviews: 120,
    price: 1499,
    oldPrice: 1799,
  },
  {
    id: 2,
    discount: "-10%",
    // image: gpu,
    title: "MSI GeForce RTX 4070 Ti Graphics Card",
    rating: 4.8,
    reviews: 98,
    price: 879,
    oldPrice: 999,
  },
  {
    id: 3,
    discount: "-20%",
    // image: keyboard,
    title: "Corsair K70 RGB PRO Mechanical Keyboard",
    rating: 4.9,
    reviews: 250,
    price: 119,
    oldPrice: 149,
  },
  {
    id: 4,
    discount: "-25%",
    // image: mouse,
    title: "Logitech G Pro X Superlight 2",
    rating: 4.8,
    reviews: 190,
    price: 119,
    oldPrice: 159,
  },
  {
    id: 5,
    discount: "-18%",
    // image: headset,
    title: "HyperX Cloud III Gaming Headset",
    rating: 4.9,
    reviews: 145,
    price: 84,
    oldPrice: 99,
  },
];

const Products = () => {
  return (
    <section className="products">
      <div className="products-header">
        <div>
          <span className="products-subtitle">TRENDING PRODUCTS</span>
          <h2>Popular Gaming Gear</h2>
        </div>

        <button className="products-btn">
          View All Products <FaArrowRight />
        </button>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <span className="discount">{item.discount}</span>

            <button className="wishlist">
              <FaRegHeart />
            </button>

            <div className="product-image">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>

            <div className="rating">
              <FaStar />
              <span>{item.rating}</span>
              <small>({item.reviews})</small>
            </div>

            <div className="price">
              <span className="new-price">₹{item.price*90}</span>
              <span className="old-price">₹{item.oldPrice*90}</span>
            </div>

            <button className="cart-btn">
              <FaShoppingCart />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;