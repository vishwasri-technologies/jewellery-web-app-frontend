import React from "react";
import "./Bangles.css";
import B1 from "../assets/Bangles/B1.png"; 
import B2 from "../assets/Bangles/B2.png";
import B3 from "../assets/Bangles/B3.png";
import B4 from "../assets/Bangles/B4.png";
import B5 from "../assets/Bangles/B5.png";
import B6 from "../assets/Bangles/B6.png";
import B7 from "../assets/Bangles/B7.png";
import B8 from "../assets/Bangles/B8.png";
import B9 from "../assets/Bangles/B9.png";
import Footer from "./Footer";

const products = [
  {
    id: 1,
    name: "Golden Stone Bangles",
    price: "₹299",
    image: B1,
  },
  {
    id: 2,
    name: "Gold Bangles",
    price: "₹499",
    image: B2,
  },
  {
    id: 3,
    name: "Jadau Bangle",
    price: "₹399",
    image: B3,
  },
  {
    id: 4,
    name: "White Stone Bangle",
    price: "₹199",
    image: B4,
  },
  {
    id: 5,
    name: "Crystal Bangles",
    price: "₹299",
    image: B5,
  },
  {
    id: 6,
    name: "Grey Rose & Gold Bangle Set",
    price: "₹199",
    image: B6,
  },
  {
    id: 7,
    name: "CZ Bangles",
    price: "₹299",
    image: B7,
  },
  {
    id: 8,
    name: "Diamond Bangle Set",
    price: "₹399",
    image: B8,
  },
  {
    id: 9,
    name: "Stone Bangles",
    price: "₹299",
    image: B9,
  },
];

const Bangles = () => {
  return (
    <div>
      <div className="bangles-wrapper">
        <div className="bangles-grid">
          {products.map((product) => (
            <div key={product.id} className="bangle-card">
              <img src={product.image} alt={product.name} className="bangle-img" />
              <div className="bangle-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bangles;