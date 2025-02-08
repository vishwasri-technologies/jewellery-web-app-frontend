import React from "react";
import Footer from "./Footer";
import image514 from '../assets/Chains/image514.png';
import image513 from '../assets/Chains/image513.png';
import image512 from '../assets/Chains/image512.png';
import image511 from '../assets/Chains/image511.png';
import image510 from '../assets/Chains/image510.png';
import image509 from '../assets/Chains/image509.png';
import image508 from '../assets/Chains/image508.png';
import image507 from '../assets/Chains/image507.png';
import image506 from '../assets/Chains/image506.png';
import image505 from '../assets/Chains/image505.png';
import image504 from '../assets/Chains/image504.png';
import image503 from '../assets/Chains/image503.png';
import image502 from '../assets/Chains/image502.png';
import image501 from '../assets/Chains/image501.png';
import image500 from '../assets/Chains/image500.png';
import "./Chains.css";
const products =[
  {
    id: 1,
    name: "Choker with Earrings",
    price: "₹1400",
    image: image514,
  },
  {
    id: 2,
    name: "Multicolour Earrings",
    price: "₹559",
    image: image513,
  },
  {
    id: 3,
    name: "Jadau Bangle",
    price: "₹559",
    image: image512,
  },
  {
    id: 4,
    name: "Stone Bangles",
    price: "₹300",
    image: image511,
  },
  {
    id: 5,
    name: "Short Chain with Pendant",
    price: "₹199",
    image: image510,
  },
  {
    id: 6,
    name: "Gold & Pearl necklace set",
    price: "₹559",
    image: image509,
  },
  {
    id: 6,
    name: "Gold & Pearl necklace set",
    price: "₹559",
    image: image508,
  },
  {
    id: 7,
    name: "Gemstones Ring",
    price: "₹559",
    image: image507,
  },
  {
    id: 8,
    name: "Stone-Studded Choker",
    price: "₹559",
    image: image506,
  },
  {
    id: 9,
    name: "Jhumka earrings",
    price: "₹559",
    image: image505,
  },
  {
    id: 10,
    name: "Bracelet",
    price: "₹559",
    image: image504,
  },
  {
    id: 11,
    name: "Polki Choker",
    price: "₹559",
    image: image503,
  },
  {
    id: 12,
    name: "Gold plated Bangle Set",
    price: "₹559",
    image: image502,
  },
  {
    id: 13,
    name: "Rings",
    price: "₹559",
    image: image501,
  },
  {
    id: 14,
    name: "Red Kundan Necklace",
    price: "₹559",
    image: image500,
  },
]
const Chains = () => {
  return (
    <div>
      <div className="chains-container">
        <div className="chains-grid">
          {products.map((product) => (
            <div key={product.id} className="chains-item">
              <img
                src={product.image}
                alt={product.name}
                className="chains-img"
              />
              <div className="chains-info">
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

export default Chains;
