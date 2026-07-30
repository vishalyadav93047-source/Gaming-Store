import "./Reviews.css";

import {
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

// import user1 from "../assets/user1.jpg";
// import user2 from "../assets/user2.jpg";
// import user3 from "../assets/user3.jpg";

// import laptop from "../assets/laptop.png";
// import mouse from "../assets/mouse.png";
// import pc from "../assets/pc.png";

const reviews = [
  {
    id: 1,
    name: "Dev",
    // avatar: user1,
    // product: laptop,
    productName: "ASUS ROG Strix G16",
    review:
      "The best quality products and fast delivery! My gaming experience is next level now.",
  },
  {
    id: 2,
    name: "Pramod Kumar",
    // avatar: user2,
    // product: mouse,
    productName: "Logitech G Pro X Superlight 2",
    review:
      "Amazing customer support and genuine products. Highly recommended GameHub!",
  },
  {
    id: 3,
    name: "Rohan",
    // avatar: user3,
    // product: pc,
    productName: "Custom Gaming PC",
    review:
      "Got my dream PC from GameHub. Build quality is insane! Worth every penny.",
  },
];

const Reviews = () => {
  return (
    <section className="reviews">

      <div className="reviews-header">

        <div>
          <span className="reviews-subtitle">
            WHAT GAMERS SAY
          </span>

          <h2>Customer Reviews</h2>
        </div>

        <button className="reviews-btn">
          View All Reviews
          <FaArrowRight />
        </button>

      </div>

      <div className="reviews-grid">

        {reviews.map((item) => (

          <div className="review-card" key={item.id}>

            <div className="review-top">

              <div className="review-user">

                <img
                  src={item.avatar}
                  alt={item.name}
                />

                <div>

                  <h3>{item.name}</h3>

                  <span className="verified">
                    Verified Buyer
                  </span>

                </div>

              </div>

              <div className="stars">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

            </div>

            <p className="review-text">
              "{item.review}"
            </p>

            <div className="review-product">

              <img
                src={item.product}
                alt={item.productName}
              />

              <span>{item.productName}</span>

            </div>

          </div>

        ))}

      </div>

      <div className="review-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </section>
  );
};

export default Reviews;