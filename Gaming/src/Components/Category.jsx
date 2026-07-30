import "../Components/Category.css";

import {
  FaArrowRight
} from "react-icons/fa";

import gaming from "../assets/hero.png";
// import laptop from "../assets/laptop.png";
// import ps5 from "../assets/ps5.png";
// import xbox from "../assets/xbox.png";
// import keyboard from "../assets/keyboard.png";
// import mouse from "../assets/mouse.png";
// import headset from "../assets/headset.png";
// import controller from "../assets/controller.png";
// import chair from "../assets/chair.png";

const categories = [
  {
    id: 1,
    name: "Gaming PCs",
    images: gaming,
    color: "#2563eb",
  },
  {
    id: 2,
    name: "Laptops",
    // images: laptop,
    color: "#7c3aed",
  },
  {
    id: 3,
    name: "PlayStation",
    // images: ps5,
    color: "#2563eb",
  },
  {
    id: 4,
    name: "Xbox",
    // images: xbox,
    color: "#0891b2",
  },
  {
    id: 5,
    name: "Keyboards",
    // images: keyboard,
    color: "#9333ea",
  },
  {
    id: 6,
    name: "Mouse",
    // images: mouse,
    color: "#7c3aed",
  },
  {
    id: 7,
    name: "Headsets",
    // images: headset,
    color: "#2563eb",
  },
  // {
  //   id: 8,
  //   name: "Controllers",
  //   // images: controller,
  //   color: "#2563eb",
  // },
  // {
  //   id: 9,
  //   name: "Gaming Chairs",
  //   // images: chair,
  //   color: "#0891b2",
  // },
];

export default function Category() {
  return (
    <section className="category">

      <div className="category-header">

        <div>
          <span className="category-subtitle">
            BROWSE CATEGORIES
          </span>

          <h2>Shop By Category</h2>
        </div>

        <button className="view-btn">
          View All Categories
          <FaArrowRight />
        </button>

      </div>

      <div className="category-grid">

        {categories.map((item) => (
          <div
            key={item.id}
            className="category-card"
            style={{
              borderColor: item.color,
            }}
          >
            <img src={item.images} alt={item.name} />

            <h3>{item.name}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}