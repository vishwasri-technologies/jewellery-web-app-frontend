import React from "react";
import "./EarRings.css";
 
import ee1 from '../assets/EarRings/ee1.png';
import ee2 from '../assets/EarRings/ee2.png';
import ee3 from '../assets/EarRings/ee3.png';
import ee4 from '../assets/EarRings/ee4.png';
import ee5 from '../assets/EarRings/ee5.png';
import ee6 from '../assets/EarRings/ee6.png';
import ee7 from '../assets/EarRings/ee7.png';
import ee8 from '../assets/EarRings/ee8.png';
import ee9 from '../assets/EarRings/ee9.png';
import ee10 from '../assets/EarRings/ee10.png';
import ee11 from '../assets/EarRings/ee11.png';
import ee12 from '../assets/EarRings/ee12.png';
import Footer from "./Footer";

const products = [
  {
    id: 1,
    name: "White Kundan Jhumka",
    price: "₹1400",
    image: ee1,
  },
  {
    id: 2,
    name: "Multicolour Jhumka Earrings",
    price: "₹1400",
    image: ee2,
  },
  {
    id: 3,
    name: "Red and Green Stone CZ Earrings",
    price: "₹1400",
    image: ee3,
  },
  {
    id: 4,
    name: "White Kundan Jhumka",
    price: "₹1400",
    image: ee4,
  },
  {
    id: 5,
    name: "Kundan Earring",
    price: "₹1400",
    image: ee5,
  },
  {
    id: 6,
    name: "Black Jhumka Earrings",
    price: "₹1400",
    image: ee6,
  },
  {
    id: 7,
    name: "Gold Plated Rings",
    price: "₹1400",
    image: ee7,
  },
  {
    id: 8,
    name: "Gold Plated Rings",
    price: "₹1400",
    image: ee8,
  },
  {
    id: 9,
    name: "Diamond & Gold Passion Ring",
    price: "₹1400",
    image: ee9,
  },
  {
    id: 10,
    name: "Princess Ring",
    price: "₹1400",
    image: ee10,
  },
  {
    id: 11,
    name: "Diamond & Gold Passion Ring",
    price: "₹1400",
    image: ee11,
  },
  {
    id: 12,
    name: "Multi Stone Ring",
    price: "₹1400",
    image: ee12,
  },
]
const EarringsRings = () => {
  return (
    <>
   <div>
   <div>
  <div className="store-container">
    <div className="store-grid">
      {products.map((product) => (
        <div key={product.id} className="store-item">
          <img
            src={product.image}
            alt={product.name}
            className="store-img"
          />
          <div className="store-info">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

   </div>
<div>
  <Footer />
</div>
    </>
  )
}
export default EarringsRings;
