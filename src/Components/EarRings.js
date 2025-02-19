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

const earrings = [
  {
    id: 1,
    name: "White Kundan Jhumka",
    price: "₹399",
    image: ee1,
  },
  {
    id: 2,
    name: "Multicolour Jhumka Earrings",
    price: "₹99",
    image: ee2,
  },
  {
    id: 3,
    name: "Red and Green Stone CZ Earrings",
    price: "₹599",
    image: ee3,
  },
  {
    id: 4,
    name: "White Kundan Jhumka",
    price: "₹749",
    image: ee4,
  },
  {
    id: 5,
    name: "Kundan Earring",
    price: "₹99",
    image: ee5,
  },
  {
    id: 6,
    name: "Black Jhumka Earrings",
    price: "₹99",
    image: ee6,
  }
];

const rings = [
  {
    id: 7,
    name: "Gold Plated Rings",
    price: "₹99",
    image: ee7,
  },
  {
    id: 8,
    name: "Gold Plated Rings",
    price: "₹99",
    image: ee8,
  },
  {
    id: 9,
    name: "Diamond & Gold Passion Ring",
    price: "₹99",
    image: ee9,
  },
  {
    id: 10,
    name: "Princess Ring",
    price: "₹119",
    image: ee10,
  },
  {
    id: 11,
    name: "Diamond & Gold Passion Ring",
    price: "₹149",
    image: ee11,
  },
  {
    id: 12,
    name: "Multi Stone Ring",
    price: "₹119",
    image: ee12,
  }
];

const EarRings = () => {
  return (
    <>
      <div className="main-container">
        
        <div className="category-section">
          <h2 className="category-title">Earrings</h2>
          <div className="store-grid">
            {earrings.map((product) => (
              <div key={product.id} className="store-item">
                <img src={product.image} alt={product.name} className="store-img" />
                <div className="store-info">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rings Section */}
        <div className="category-section">
          <h2 className="category-title">Rings</h2>
          <div className="store-grid">
            {rings.map((product) => (
              <div key={product.id} className="store-item">
                <img src={product.image} alt={product.name} className="store-img" />
                <div className="store-info">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <Footer />
      </div>
    </>
  )
}

export default EarRings;