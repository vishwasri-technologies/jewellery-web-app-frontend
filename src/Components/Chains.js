import React from "react";
import "./Chains.css";
import image500 from "../assets/Chains/image500.jpg"; 
import image501 from "../assets/Chains/image501.png";
import image502 from "../assets/Chains/image502.png";
import image503 from "../assets/Chains/image503.png";
import image504 from "../assets/Chains/image504.png";
import image505 from "../assets/Chains/image505.png";
import image507 from "../assets/Chains/image507.png";
import image508 from "../assets/Chains/image508.png";
import image509 from "../assets/Chains/image509.png";
import image510 from "../assets/Chains/image510.png";
import image511 from "../assets/Chains/image511.png";
import image512 from "../assets/Chains/image512.png";
import image513 from "../assets/Chains/image513.png";
import image514 from "../assets/Chains/image514.png";

const products = [
  { name: "Kundan Chain", price: "₹1,400", image: image500 },
  { name: "Antique Long Lakshmi Chain", price: "₹1,400", image: image501 },
  { name: "Classic Gold-Plated Chain", price: "₹1,400", image: image502 },
  { name: "Peacock Motifs", price: "₹1,400", image: image503 },
  { name: "Ramdev Pendant", price: "₹1,400", image: image504 },
  { name: "White Kundan Chain", price: "₹1,400", image: image505 },
  { name: "Short Chain with Pendant", price: "₹1,400", image: image507 },
  { name: "Antique Lakshmi Gold Chain", price: "₹1,400", image: image508 },
  { name: "Rani Haram", price: "₹1,400", image: image509 },
  { name: "Black Kundan Chain", price: "₹1,400", image: image510 },
  { name: "Ramdev Pendant Chain", price: "₹1,400", image: image511 },
  { name: "Short Chain with Pendant", price: "₹1,400", image: image512 },
  { name: "Short Chain", price: "₹1,400", image: image513 },
  { name: "Short Chain with Pendant", price: "₹1,400", image: image514 },
];

const Chains = () => (
  <div className="chains-container">
    {products.map((product, index) => (
      <div key={index} className="product">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    ))}
  </div>
);


export default Chains;

